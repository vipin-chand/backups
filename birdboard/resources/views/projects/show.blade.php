@extends('layouts.app')

@section('content')
    <header class="py-3 px-3 my-4">
        <div class="flex justify-between">
            <p class="text-xl text-gray-600"> 
                <a href="/projects">My Projects</a> / {{ $project->title }}
            </p>

            <a href="/projects/create" class="bg-blue-500 rounded-lg text-sm text-blue-100 px-5 py-2">New project</a>
        </div>
    </header>
    
    <main>
        <div class="flex">
            <div class="w-3/4 px-3">                
                <div class="mb-8">
                    <h2 class="text-lg text-gray-700 font-normal mb-3">Tasks</h2>

                    @foreach ($project->tasks as $task)
                        <div class="bg-white rounded-lg shadow-sm py-2 px-5 mb-3">
                            <form action="{{ $task->path() }}" method="post">
                                @csrf
                                @method('PATCH')
                                <div class="flex items-center">
                                    <input type="text" class="w-full {{ $task->completed ? 'text-gray-600' : ''}}" name="body" value="{{$task->body}}">
                                    <input type="checkbox" 
                                        name="completed" 
                                        onChange="this.form.submit()" {{ $task->completed ? 'checked' : ''}}
                                    >
                                </div>
                            </form>                        
                        </div>  
                    @endforeach

                    <form method="POST" action="{{$project->path().'/tasks'}}">
                        @csrf
                        <div class="bg-white rounded-lg shadow-sm py-2 px-5 mb-3">
                            <input name="body" class="w-full" type="text" placeholder="Add a new tasks..">
                         </div>
                    </form>
                </div>
                <div>
                    <h2 class="text-lg text-gray-700 font-normal mb-3">General Notes</h2>
                <textarea class="bg-white rounded-lg shadow-sm py-2 px-5 w-full" style="min-height: 200px">{{$project->notes}}</textarea>
                </div>
            </div>

            <div class="w-1/4">
                @include('projects.card')
            </div>
        </div>
    </main>
@endsection