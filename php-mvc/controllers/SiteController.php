<?php

namespace app\controllers;

use app\core\Controller;
use app\core\Request;

class SiteController extends Controller
{

    public function contact()
    {
        return $this->render('contact');
    }

    public function home()
    {
        $data = [
            'name' => 'Thinking about name'
        ];
        return $this->render('home', $data);
    }

    public function handleContact(Request $request)
    {
        $body = $request->getBody();
        return 'handing data from site controller';
    }
}
