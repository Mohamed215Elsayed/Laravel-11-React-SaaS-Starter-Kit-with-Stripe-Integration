<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeatureResource extends JsonResource
{
    public static $wrap = false;
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            //id 'image','route_name','name','description','required_credits','active'
            // 'id' => $request->get('id'),
            'id' => $this->id,
            // 'image' => $this->image ? asset($this->image) : null,
            'image' => $this->image ? : null,
            'route_name' => $this->route_name,
            'name' => $this->name,
            'description' => $this->description ,
            'required_credits' => $this->required_credits,
            'active' => $this->active
        ];
    }
}
