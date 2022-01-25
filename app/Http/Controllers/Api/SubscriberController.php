<?php

namespace App\Http\Controllers\Api;

use App\Models\Subscriber;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubscriberRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class SubscriberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Paginator
     */
    public function index(Request $request): Paginator
    {
        if ($request->user()->is_admin) {
            return Subscriber::loadAll();
        }
        return Subscriber::loadAllMine($request->user()->id);
    }

    /**
     * get all public data list
     *
     * @return Paginator
     */
    public function publicViews(): Paginator
    {
        return Subscriber::loadAllPublished();
    }

    /**
     * Get single public data
     *
     * @param $slug
     * @return Subscriber
     */
    public function publicView($slug): Subscriber
    {
        return Subscriber::loadPublished($slug);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SubscriberRequest $request
     * @return JsonResponse
     */
    public function store(SubscriberRequest $request): JsonResponse
    {
        $user = $request->user();

        $data= new Subscriber($request->validated());
        $data->slug = Str::slug($request->get('name'));

        $user->subscribers()->save($data);

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function show(Request $request, int $id): Response
    {
        if (!$request->user()->is_admin) {
            return Subscriber::mine($request->user()->id)->findOrFail($id);
        }

        return Subscriber::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return void
     */
    public function edit(int $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SubscriberRequest $request
     * @param int $id
     * @return Response
     */
    public function update(SubscriberRequest $request, int $id): Response
    {
        $data_entry = Subscriber::findOrFail($id);

        $data = $request->validated();
        $data['slug'] = Str::slug($data['name']);
        $data_entry->update($data);

        return response()->json($data_entry, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function delete(int $id): Response
    {
        $data_entry = Subscriber::findOrFail($id);

        $data_entry->delete();

        return response([], 200);
    }
}
