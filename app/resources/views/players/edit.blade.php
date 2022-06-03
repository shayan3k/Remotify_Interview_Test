@extends('layouts/app')

@section('title', 'Edit Single Player')




@section('styles')

@endsection


@section('contents')
    <div class="content">
        <div class="row px-3">
            <div class=" col-sm-12 col-md-8 mx-auto  py-3">
                <div class="card p-4">
                    <div class="header">
                        <h4 class="title">Edit: ({{ $player->name }})</h4>
                    </div>
                    <div class="content">

                        {!! Form::open(['route' => ['players.update', $player->id], 'method' => 'PUT', 'enctype' => 'multipart/form-data']) !!}

                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" class="form-control border-input"
                                        placeholder="name" value="{{ old('name', $player->name) }}">
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="age text-capitalize">Age</label>
                                    <input type="number" id="age" name="age" class="form-control border-input"
                                        placeholder="age" value="{{ old('age', $player->age) }}">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description text-capitalize">Description</label>
                                    <div class="pt-5">
                                        {{-- enables the CKEDITOR if uncommented --}}
                                        {{-- <textarea name="description" id="description"
                                            class="form-control border-input CkEditor">{{ old('description', $player->description) }}</textarea> --}}
                                        <textarea name="description" id="description" class="form-control border-input"
                                            rows="10">{{ old('description', $player->description) }}</textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-outline-success btn-icon-text">
                                    <i class="fas fa-check-circle"></i>
                                    Edit
                                </button>
                            </div>
                            <div class="clearfix"></div>
                            {{ Form::close() }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    @endsection
