<?php
  // $page = $_GET["page"];
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Method:GET');
    //$url = "http://japi.juhe.cn/joke/content/list.from?key=084272c282f092f2ee16282d05a554b2&page=".$page."&pagesize=10&sort=asc&time=1418745237";
    $url="http://192.168.56.1:3000/citydata.json"
    $html = file_get_contents($url);
    echo $html;
?>