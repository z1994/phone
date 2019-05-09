$(function () {
    var cacheForPutHtml = '<div class="btn-control">' + $('.btn-control').html() + '</div>';//灏嗘彁浜ゆ爮DIV鎻愬彇涓哄父閲�

    //澧炲姞涓€鏍忎笂浼犲浘鐗嘍IV
    $('.add-more').click(function () {
        $('body').append(cacheForPutHtml);
    })
})

//寮€濮嬩笂浼犲浘鐗�
function do_upload(){
    //鏁寸悊鏈€缁堜笂浼犳枃浠�
    var nameFlags = 0;//閲嶅啓鏂囦欢鍚嶅懡鍚嶆爣璁�
    var tempFile = [];//涓存椂鏂囦欢瀵硅薄瀛樺偍鍙橀噺

    $.each(allFile,function (k,v) {
        tempFile.push(new File([v],nameFlags.toString() + '.' + v.type.substr(6),{type: v.type}));//閲嶅缓鏂囦欢 鍔犲叆鏁扮粍
        nameFlags++;
    })

    var formData = new FormData();//FormData 杞崲鎴愪簩杩涘埗鏂囦欢涓婁紶鑷冲悗鍙�

    for(var i = 0; i < tempFile.length;i++){
        formData.append('image['+i+']', tempFile[i]);
    }
    formData.append('app_id','Q2H41lup');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('timestamp','1555400833');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('nonce','dc8c2528676945b2a523bad81489c1eb');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('sign','E1089206867831DD878AE0B13733D173');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('flag','1');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('client','1');  //娣诲姞鍏朵粬鍙傛暟
    formData.append('client_id','1');  //娣诲姞鍏朵粬鍙傛暟
    $.ajax({
        url: '/api/router?method=UpFile.upImg',
        type: 'POST',
        data: formData,                    // 涓婁紶formdata灏佽鐨勬暟鎹�
        dataType: 'JSON',
        cache: false,                      // 涓嶇紦瀛�
        processData: false,                // jQuery涓嶈鍘诲鐞嗗彂閫佺殑鏁版嵁
        contentType: false,                // jQuery涓嶈鍘昏缃瓹ontent-Type璇锋眰澶�
        success:function (data) {           //鎴愬姛鍥炶皟
            console.log('鎴愬姛鏁版嵁锛�'+JSON.stringify(data));
            alert('涓婁紶鎴愬姛锛�');
        },
        error:function (data) {
            console.log('鍑洪敊鏁版嵁锛�'+JSON.stringify(data));
            alert('涓婁紶鍑洪敊锛�');
        }
    });
}

//绉婚櫎涓€鏍�
function del_files(obj) {
    if (!emptyHtmlVal()){
        alert('鍐嶅垹鍟ラ兘娌″暒~');
    } else{
        obj.parent('.btn-control').remove();
    }
}

//绌洪€夋嫨鍣ㄩ獙璇�
function emptyHtmlVal() {
    if ($('.btn-control').length <= 1){
        return false;
    }
    return true;
}