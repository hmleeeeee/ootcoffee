var smartPhones =[
    'iphone','ipod',
    'windows ce',
    'android','blackberry',
    'nokia','webos',
    'opera mini','sonyerricsson',
    'opera mobi', 'iemobile'
];

for (var i in smartPhones){
    if (navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
       document.location = 'm/index.html';
    }
} 

/*
	* 모바일에서 해당 url(PC url)만 받아도 모바일 페이지를 인식
	1. mobile.js를 만들어 pc의 index.html연결
	2. 모바일의 PC버전버튼을 누르면 계속 모바일로 연결 처리될것임
	3. pc의 index.html을 다른 이름으로 저장 => index_pc.html
	4. index_pc.html에 연결된 mobile.js연결을 지워서 모바일로 연결 안되게 처리
	5. 모바일의 index.html의 PC버전의 연결 주소를 [../index_pc.html]로 변경
	6. index_pc.html의 맨 아래 부분에 모바일버전이라는 a태그를 만들어 다시 모바일로 연결될 수 있도록 설정
*/














