<?php

namespace App\Models;

use Database\Factories\SubscriberFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subscriber extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'subscribers';

    protected $fillable = ['name', 'email', 'phone', 'address', 'slug', 'published', 'published_at'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'published' => 'boolean',
    ];

    protected static function newFactory(): SubscriberFactory
    {
        return SubscriberFactory::new();
    }

    /**
     * Load all for admin and paginate
     *
     * @return Paginator
     */
    public static function loadAll(): Paginator
    {
        return static::latest()
            ->paginate();
    }

    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllMine(int $user_id): Paginator
    {
        return static::latest()
            ->mine($user_id)
            ->paginate();
    }

    /**
     * load all published with pagination
     *
     * @return Paginator
     */
    public static function loadAllPublished(): Paginator
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
        ])
            ->latest()
            ->published()
            ->paginate();
    }

    /**
     * load one published
     *
     * @param string $slug
     *
     * @return Subscriber
     */
    public static function loadPublished(string $slug): Subscriber
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
        ])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();
    }

    /**
     * Add query scope to get only public data
     *
     * @param Builder $query
     *
     * @return Builder
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where([
            'published' => true,
        ]);
    }

    /**
     * Load only data related with the user id
     *
     * @param Builder $query
     * @param int $user_id
     *
     * @return Builder
     */
    public function scopeMine(Builder $query, int $user_id): Builder
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * Relationship between data and user
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
