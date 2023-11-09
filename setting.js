const tombol = document.getElementById('tombol');
tombol.addEventListener('click',function(){
    var isi = document.getElementById('textbox').value;
    alert(isi);
    document.getElementById('textbox').value="";
})
