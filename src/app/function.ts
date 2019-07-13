export let global_function = {
	 "getLoader":function(){
		  return '<ion-spinner name="circles"></ion-spinner>';
	 },
	 "randomNumber": function(){
		return Math.random();
	 },
	 "getToken":function(){
		return window.localStorage.getItem('app_token');
	 }
}
