@extends('layouts.app')
@section('content')
    
    <header class="py-3 px-3 my-4">
        <div class="flex justify-between">
            <h3 class="text-xl">My Projects</h3>
            <a href="" class="bg-blue-500 rounded-lg text-sm text-blue-100 px-5 py-2">New project</a>
        </div>
    </header>

    <main class="flex flex-wrap">
        @forelse ($projects as $project)
            <div class="w-1/3 px-3 pb-6">
                @include('projects.card')
            </div>
        @empty
            <div>No projects yet</div>
        @endforelse        
    </main>

@endsection