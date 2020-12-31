<?php

namespace app\core;

class Model
{
    public function loadData($data)
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
        var_dump($this);
    }

    public function validate()
    {
    }
}
