import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CityService{

    http;

    headers = new Headers({'Content-Type': 'application/json'});

    // WEATHER API CONST //
    URL = "http://api.openweathermap.org/data/2.5/weather?id=";
    sampleURL = "http://samples.openweathermap.org/data/2.5/weather?id=";
    myKey = "471bda1676d8f78ce882b2c408e84b60";
    sampleKey = "b1b15e88fa797225412429c1c50c122a1";

    constructor(http: Http){
        this.http = http;
    }


    getCities() {

       var cityes =  [
                {"_id":14256,"coord":{"lon":48.570728,"lat":34.790878},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":132142},"langs":[{"de":"Azad Shahr"},{"fa":"آزادشهر"}],"name":"Azadshahr","stat":{"level":1.0,"population":514102},"stations":[{"id":7030,"dist":9,"kf":1}],"zoom":10}
                ,{"_id":18918,"coord":{"lon":34.058331,"lat":35.012501},"country":"CY","geoname":{"cl":"P","code":"PPL","parent":146615},"langs":[{"en":"Protaras"},{"ru":"Протарас"}],"name":"Protaras","stat":{"level":1.0,"population":20230},"stations":[{"id":5448,"dist":42,"kf":1}],"zoom":6}
                ,{"_id":23814,"coord":{"lon":47.055302,"lat":34.383801},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":128222},"langs":[{"fa":"کهریز"}],"name":"Kahriz","stat":{"level":1.0,"population":766706},"stations":[{"id":7022,"dist":10,"kf":1}],"zoom":7}
                ,{"_id":24851,"coord":{"lon":47.9725,"lat":34.073399},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":125605},"langs":[{"fa":"نور آباد"},{"link":"http://en.wikipedia.org/wiki/Nurabad%2C_Lorestan"},{"ru":"Нурабад"}],"name":"Nurabad","stat":{"level":1.0,"population":73528},"stations":[{"id":7022,"dist":80,"kf":1},{"id":7024,"dist":75,"kf":1},{"id":7073,"dist":49,"kf":1}],"zoom":9}
                ,{"_id":32723,"coord":{"lon":52.309422,"lat":35.23455},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":116401},"langs":[{"fa":"ايستگاه گرمسار"}],"name":"Istgah-e Garmsar","stat":{"level":1.0,"population":49491},"stations":[{"id":7036,"dist":99,"kf":1}],"zoom":8}
                ,{"_id":32767,"coord":{"lon":51.56889,"lat":35.439442},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":110791},"langs":[{"fa":"قرچك"}],"name":"Qarchak","stat":{"level":1.0,"population":251834},"stations":[{"id":7032,"dist":36,"kf":1},{"id":7074,"dist":48,"kf":1}],"zoom":9}
                ,{"_id":41210,"coord":{"lon":49.195999,"lat":36.213001},"country":"IR","geoname":{"cl":"P","code":"PPL","parent":111452},"langs":[{"fa":"خرم درّه"}],"name":"Khorram Darreh","stat":{"level":1.0,"population":50528},"stations":[{"id":7033,"dist":76,"kf":1}],"zoom":12}
                ,{"_id":50672,"coord":{"lon":44.893799,"lat":2.6185},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":51966},"langs":[{"so":"Wanlaweyn"}],"name":"Wanlaweyn","stat":{"level":1.0,"population":22022},"zoom":9}
                ,{"_id":52867,"coord":{"lon":44.529991,"lat":1.78784},"country":"SO","geoname":{"cl":"P","code":"PPLA2","parent":51966},"langs":[{"so":"Qoryooley"}],"name":"Qoryooley","stat":{"level":1.0,"population":51720},"zoom":8}
                ,{"_id":53157,"coord":{"lon":49.872822,"lat":11.47197},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":64661},"langs":[{"link":"http://en.wikipedia.org/wiki/Qandala"},{"so":"Qandala"}],"name":"Qandala","stat":{"level":1.0,"population":15923},"zoom":8}
                ,{"_id":53654,"coord":{"lon":45.34375,"lat":2.03711},"country":"SO","geoname":{"cl":"P","code":"PPLC","parent":64833},"name":"Mogadishu","stat":{"level":1.0,"population":2587183},"zoom":1}
                ,{"_id":54715,"coord":{"lon":42.544498,"lat":3.79376},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":58802},"name":"Luuq","stat":{"level":1.0,"population":33820},"zoom":8}
                ,{"_id":55671,"coord":{"lon":42.545361,"lat":-0.35817},"country":"SO","geoname":{"cl":"P","code":"PPLA","parent":56083},"langs":[{"de":"Kismaayo"},{"en":"Kismayo"},{"es":"Kismaayo"},{"fi":"Kismayo"},{"fr":"Kismaayo"},{"id":"Kismaayo"},{"ja":"キスマヨ"},{"link":"http://en.wikipedia.org/wiki/Kismayo"},{"nl":"Kismayo"},{"so":"Kismaayo"},{"sw":"Kismayu"}],"name":"Kismaayo","stat":{"level":1.0,"population":234852},"zoom":6}
                ,{"_id":56166,"coord":{"lon":42.785351,"lat":0.48829},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":56084},"langs":[{"link":"http://en.wikipedia.org/wiki/Jilib"},{"ru":"Джилиб"}],"name":"Jilib","stat":{"level":1.0,"population":43694},"zoom":9}
                ,{"_id":56335,"coord":{"lon":45.500481,"lat":2.78087},"country":"SO","geoname":{"cl":"P","code":"PPLA","parent":51967},"langs":[{"de":"Giohar"},{"en":"Giohar"},{"link":"http://en.wikipedia.org/wiki/Jowhar"},{"so":"Jawhar"}],"name":"Jawhar","stat":{"level":1.0,"population":47086},"zoom":8}
                ,{"_id":56399,"coord":{"lon":42.744968,"lat":0.06968},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":56083},"langs":[{"de":"Jamaame"},{"en":"Jamaame"},{"link":"http://en.wikipedia.org/wiki/Jamame"}],"name":"Jamaame","stat":{"level":1.0,"population":185270},"zoom":6}
                ,{"_id":57289,"coord":{"lon":44.064999,"lat":9.56},"country":"SO","geoname":{"cl":"P","code":"PPLA","parent":50360},"langs":[{"link":"http://en.wikipedia.org/wiki/Hargeisa"},{"ru":"Харгейсе"}],"name":"Hargeysa","stat":{"level":1.0,"population":477876},"zoom":6}
                ,{"_id":59611,"coord":{"lon":47.430828,"lat":6.76972},"country":"SO","geoname":{"cl":"P","code":"PPLA","parent":53707},"name":"Gaalkacyo","stat":{"level":1.0,"population":61200},"zoom":7}
                ,{"_id":60019,"coord":{"lon":49.816399,"lat":7.9803},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":53477},"name":"Eyl","stat":{"level":1.0,"population":18904},"zoom":5}
                ,{"_id":62691,"coord":{"lon":47.36795,"lat":10.61616},"country":"SO","geoname":{"cl":"P","code":"PPLA","parent":52187},"name":"Ceerigaabo","stat":{"level":1.0,"population":33853},"zoom":7}
                ,{"_id":62788,"coord":{"lon":47.180641,"lat":3.84878},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":59362},"langs":[{"so":"Ceeldheer"}],"name":"Ceeldheer","stat":{"level":1.0,"population":26562},"zoom":6}
                ,{"_id":63571,"coord":{"lon":44.07806,"lat":2.80257},"country":"SO","geoname":{"cl":"P","code":"PPLA2","parent":64538},"langs":[{"link":"http://en.wikipedia.org/wiki/Burhakaba"},{"so":"Buurhakaba"}],"name":"Buurhakaba","stat":{"level":1.0,"population":27792},"zoom":9}
                ,{"_id":63689,"coord":{"lon":45.56744,"lat":3.85375},"country":"SO","geoname":{"cl":"P","code":"PPL","parent":57060},"langs":[{"so":"Buulobarde"}],"name":"Buulobarde","stat":{"level":1.0,"population":16928},"zoom":8}
            ]
            return cityes;

    }


    getWeather(id, onSuccess, onError){

        //you can pass options as second params in get(...) methond
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin', "*");
        //let options = new RequestOptions({ headers: this.headers });

       this.http
                .get( this.URL + id + "&units=metric" + "&appid=" + this.myKey)
                .subscribe(
                    data => {
                        onSuccess(data);
                    },
                    error=>{
                        onError(error);
                    }
               );

    }






}