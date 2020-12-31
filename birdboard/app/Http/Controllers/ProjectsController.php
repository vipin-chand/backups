<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = auth()->user()->projects;

        return view('projects.index', compact('projects'));
    }

    public function create()
    {
        return view('projects.create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(
            [
                'title' => 'required',
                'description' => 'required',
                'notes' => 'min:3'
            ]
        );

        $project = auth()->user()->projects()->create($attributes);

        return redirect($project->path());
    }

    public function show(Project $project)
    {
        if ($project->owner_id != auth()->id()) {
            abort(403);
        }

        return view('projects.show', compact('project'));
    }
}
