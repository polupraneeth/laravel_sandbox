<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubscriberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => '',
            'name' => 'required|min:3',
            'email' => 'required|email|min:5',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'address' => 'required|min:10',
            'published' => 'nullable|boolean',
            'published_at' => 'nullable|date',
        ];
    }
}
