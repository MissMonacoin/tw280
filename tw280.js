var xhr = new XMLHttpRequest()
xhr.open("post","https://twitter.com/i/tweet/create",false)
xhr.setRequestHeader("X-Twitter-Active-User", "yes")
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest")
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")
var initData=JSON.stringify(document.getElementById("init-data").value)
var twiBox=document.querySelector(".tweet-box .rich-editor")
function tweet280(str){
  var j={
    "authenticity_token": initData.formAuthenticityToken,
    "is_permalink_page": "false",
    place_id: "",
    status: str,
    weighted_character_count:"true",
    tagged_users: ""}

  var qst=""

  for (var i in j){
	  qst+=i+"="+j[i]+"&"
  }
  xhr.onreadystatechange = function() {
    switch ( xhr.readyState ) {
        case 4: // データ受信完了.
        if( xhr.status == 200 || xhr.status == 304 ) {
          alert("Tweeted!Count:"+str.length)
          twiBox.innerText=""
            } else {
              alert("(_　_|||)")
            }
            break;
    }
};
  xhr.send(qst)
}

if(twiBox.innerText&&twiBox.innerText!=""&&twiBox.innerText!="\n"&&twiBox.innerText.substr(0,5) !== twiBox.dataset.placeholderDefault.substr(0,5)&& window.confirm("Ok to tweet\nOKでツイートします。\n\n@MissMonacoinより")){
  tweet280(document.querySelector(".tweet-box .rich-editor").innerText)
}else{
  window.alert("Please type tweet first.Then run me\nまずツイートを入力してください.そのあとこのスクリプトを実行して下さい\n\n@MissMonacoinより")
}
  
