
;(()=> {
    let ajax = function ({url = '', type ='get', dataType='json', async = true}) {
       return new Promise((resolve, reject) => {
           let xhr = new XMLHttpRequest();
           xhr.open(type, url, async);
           xhr.onload = function () {
               let val = xhr.responseText;
               resolve(val);
           };
           xhr.error = function (err) {
               reject(err);
           };

           xhr.send();

       });

    };
   window.ajax = window._ = ajax;
})();

ajax({url:'../data/a.json'});


