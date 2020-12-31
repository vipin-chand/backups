<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProjectTasksTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function guests_cannot_ass_task_to_project()
    {
        $project = Project::factory()->create();

        $this->post($project->path() . '/tasks')->assertRedirect('login');
    }

    /**
     * @test
     */
    public function only_the_owner_of_the_project_may_add_tasks()
    {
        // $this->withoutExceptionHandling();
        $this->signIn();

        $project = Project::factory()->create();

        $attributes = ['body' => 'Test task'];

        $this->post($project->path() . '/tasks', $attributes)
            ->assertStatus(403);

        $this->assertDatabaseMissing('tasks', $attributes);
    }
    /**
     * @test
     */
    public function a_project_can_have_tasks()
    {
        $this->signIn();

        $project = Project::factory()->create(['owner_id' => auth()->id()]);

        $this->post($project->path() . '/tasks', ['body' => 'Task test']);

        $this->get($project->path())
            ->assertSee('Task test');
    }

    /**
     * @test
     */
    public function a_task_can_be_updated()
    {
        $this->signIn();

        $this->withoutExceptionHandling();

        $project = Project::factory()->create(['owner_id' => auth()->id()]);

        $task = $project->addTask('This is test task');

        $this->patch($task->path(), [
            'body' => 'changed',
            'completed' => true
        ]);

        $this->assertDatabaseHas('tasks', [
            'body' => 'changed',
            'completed' => true
        ]);
    }

    /**
     * @test
     */
    public function owner_of_project_can_update_a_task()
    {
        // $this->withoutExceptionHandling();

        $this->signIn();

        $project = Project::factory()->create();

        $task = $project->addTask('This is some task');

        $this
            ->patch($task->path(), ['body' => 'Task Update'])
            ->assertStatus(403);
    }

    /**
     * @test
     */
    public function a_task_should_have_body()
    {
        // $this->withoutExceptionHandling();

        $this->signIn();

        $project = Project::factory()->create(['owner_id' => auth()->id()]);

        $this->post($project->path() . '/tasks', ['body' => ''])
            ->assertSessionHasErrors('body');
    }
}
