$(document).ready(function(){





    //서버시간이 팝업을 보이고나서 1일을 구하는 함수 >>그냥은 테스트 안되고 서버가 있어야함 ftp에 올리면 거기 서버 사용해서 1일 보지않기가 적용될것임
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    //닫기 버튼 눌렀을 때의 함수
    function closeWin() {   
        if ( $('#chkBox').prop('checked') == true){  //체크박스가 체크되면-> prop()메서드에서 입력양식가 갖는 속성값을 설정
            setCookie( 'maindiv', 'done', 1 );  //지금 시간으로 부터 1일이 경과되는 함수를 실행
        }
        $('.popup').slideUp('slow');  //조건과 상관 없이 슬라이드업
    };

    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){   //1일이 0일이 되는 순간(하루가 지나면)
        $('.popup').css('display','block');  //팝업 배너가 보이고
    }else{                                  //그렇지않으면
        $('.popup').css('display','none');   //팝업 배너는 보이지 마라
    }
    
    $('.popup a').click(function() {  // 닫기 혹은 close 버튼을 클릭 했을때
        closeWin();   //팝업 배너를 닫히게 해주는 함수
    });

	

}); 


