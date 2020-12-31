<?php

namespace Tests\Unit;

use App\Models\Project;
use Carbon\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function it_has_a_path()
    {
        $this->withoutExceptionHandling();
        $project = Project::factory()->create();
        $this->assertEquals('/projects/' . $project->id, $project->path());
    }

    /**
     * @test
     */

    public function it_can_add_a_task()
    {
        $project = Project::factory()->create();
        $task = $project->addTask('Test body');

        $this->assertCount(1, $project->tasks);
        $this->assertTrue($project->tasks->contains($task));
    }
}
