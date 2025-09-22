// 제목 검색을 할 때 이텔릭에서 기본 폰트로 설정하는 함수
function changeFont() 
{
    const searchBox = document.getElementById('search_box');

    if (searchBox && searchBox.value.length > 0) 
    {
        searchBox.style.fontStyle = 'normal';
    }
    else
    {
        searchBox.style.fontStyle = 'italic';
    }
}

function linkGithub()
{
    const address = "https://github.com/morex1566/PlayVoX"
    window.open(address, "_blank");
}