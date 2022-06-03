@extends('layouts/app')

@section('title', 'Players')


@push('script')
    <script>
        $(document).ready(function() {
            $('#players').DataTable({
                dom: 'Bfrtip',
                buttons: ['excelHtml5'],
                language: {
                    // url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Persian.json',
                },
            });
        });
    </script>
    <script>
        function deleteItem(id) {

            swal.fire({
                title: 'Are You Sure?',
                text: "Attention! The Action Might be Irreversible",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#dc3545',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.value) {
                    document.getElementById('delete-item-' + id).submit();
                    swal.fire(
                        'Success!',
                        'The Changes Has Been Applied',
                        'success',
                    );
                }
            })

        }
    </script>
@endpush


<style>
    td {
        width: 13% !important;
    }

</style>

@section('contents')
    <div class="content">
        <div class="row px-3">
            <div class="col-md-12 py-3 card">
                <div class="card-header">
                    <h4 class="card-title"></h4>
                    <a href="{{ route('players.create') }}" class="btn btn-outline-success btn-icon-text"><i
                            class="fas fa-plus-circle"></i> Add New </a>
                </div>


                <div class="card-body">
                    <div class="table-responsive">
                        <table id="players" class="display" style="width:100%">
                            <thead class="text-primary primary-font">
                                <th class="text-center">actions</th>
                                <th class="text-center">description</th>
                                <th class="text-center">name</th>
                                <th class="text-center">age</th>
                                <th class="text-center">ID</th>
                            </thead>
                            <tbody class="secondary-font">
                                @forelse ($players as $player)
                                    <tr>


                                        <td class="text-center">
                                            <a href="{{ route('players.edit', $player->id) }}"
                                                class="btn btn-outline-warning btn-icon-text">
                                                <i class="fas fa-pencil-alt"></i>
                                                Edit
                                            </a>

                                            <form action="{{ route('players.destroy', $player->id) }}?_method=DELETE"
                                                method="POST" id="delete-item-{{ $player->id }}">
                                                @csrf
                                                @method('delete')
                                                <button type="button" class="btn btn-outline-danger btn-icon-text"
                                                    onclick="deleteItem({{ $player->id }})">
                                                    <i class="fas fa-trash-alt"></i>
                                                    Delete
                                                </button>
                                            </form>

                                        </td>
                                        <td class="text-center">
                                            {{ \Illuminate\Support\Str::limit($player->description, 100, $end = '...') }}
                                        </td>
                                        <td class="text-center">{{ $player->name }}</td>

                                        <td class="text-center">{{ $player->age }}</td>
                                        <td class="text-center">{{ $loop->index + 1 }}</td>
                                    </tr>
                                @empty
                                    <p class="alert alert-info text-center" style="margin-top: 10rem">محتوایی یافت نشد</p>
                                @endforelse
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
