<?php

namespace app\models;

use app\core\Model;

class RegisterModel extends Model
{
    public String $name;
    public String $email;
    public String $password;
}
