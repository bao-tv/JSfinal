let arrNotif = [
    'Tài khoản nhân viên không được để trống',
    'Tài khoản nhân viên từ 4-6 ký số',
    'Tài khoản nhân viên đã tồn tại',

    'Tên nhân viên không được để trống',
    'Tên nhân viên không hợp lệ',

    'Email không được để trống',
    'Email không hợp lệ',

    'Mật khẩu không được để trống',
    'Mật khẩu từ 6-10 ký tự',
    'Mật khẩu chưa ít nhất 1 số, 1 in hoa, 1 ký tự đặc biệt',

    'Ngày không được để trống',
    'Ngày phải đúng định dạng mm/dd/yyyy',

    'Lương cơ bản không được để trống',
    'Lương cơ bản từ 1 000 000 - 20 000 000',

    'Vui lòng chọn chức vụ hợp lệ',

    'Giờ làm không được để trống',
    'Giờ làm phải từ 80 - 200',
];

// =======check not input empty=========
function checkInputNotEmpty (idField) {
    let isValid = false;
    let valueField = getElement(idField).value;
    if(!valueField.trim()) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
} 
// ================= hàm check xem đã tồn tại chưa?===============

function checkExist(idField) {
    let isValid = false;
    let valueField = getElement(idField).value;
    let isElement = staffList.some((obj) => obj.tknv === valueField);
    if(!isElement) {
        isValid =false;
    } else isValid = true;
    return isValid;
}


function validate () {
    let isValid = true;

    // check TKNV, ko để trống, 4-6 ký số, ko có ký tự đặc biệt, ko có dấu, ko trùng nếu đã có
    let tknvNotEmpty = checkInputNotEmpty('#tknv');
    let tkexist = checkExist ('#tknv');
    if(!tknvNotEmpty) {
        isValid = false;
        getElement('#tbTKNV').style.display = 'block';
        getElement('#tbTKNV').innerHTML = arrNotif[0];
    } else {
        let arrcharater = /^[A-Za-z0-9]+$/;
        let valueTKNV = getElement('#tknv').value;
        if(!valueTKNV.match(arrcharater)|| valueTKNV.length<4 || valueTKNV.length>6) {
            isValid = false;
            getElement('#tbTKNV').style.display = 'block';
            getElement('#tbTKNV').innerHTML = arrNotif[1];
        }else if(tkexist) {
            isValid = false;
            getElement('#tbTKNV').style.display = 'block';
            getElement('#tbTKNV').innerHTML = arrNotif[2];
        } else {
            getElement('#tbTKNV').style.display = 'none';
            isValid = true;
        }
    }

    // check tên NV phải là chữ và ko để trống
    let nameNotEmpty = checkInputNotEmpty('#name');
    if(!nameNotEmpty) {
        isValid = false;
        getElement('#tbTen').style.display = 'block';
        getElement('#tbTen').innerHTML = arrNotif[3];
    } else {
        let arrcharater = /^[A-Za-z ._ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
        let valueName = getElement('#name').value;
        if(!valueName.match(arrcharater)) {
            isValid = false;
            getElement('#tbTen').style.display = 'block';
            getElement('#tbTen').innerHTML = arrNotif[4];
        } else {
            getElement('#tbTen').style.display = 'none';
            isValid = true;
        }
    }

    // check email NV
    let emailNotEmpty = checkInputNotEmpty('#email');
    if(!emailNotEmpty) {
        isValid = false;
        getElement('#tbEmail').style.display = 'block';
        getElement('#tbEmail').innerHTML = arrNotif[5];
    } else {
        let arrcharater = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valueEmail = getElement('#email').value;
        if(!valueEmail.match(arrcharater)) {
            isValid = false;
            getElement('#tbEmail').style.display = 'block';
            getElement('#tbEmail').innerHTML = arrNotif[6];
        } else {
            getElement('#tbEmail').style.display = 'none';
            isValid = true;
        }
    }

    // check password 6-10 ký tự (1 số, 1 in hoa, 1 đặc biệt), ko để trống
    let passNotEmpty = checkInputNotEmpty('#password');
    if(!passNotEmpty) {
        isValid = false;
        getElement('#tbMatKhau').style.display = 'block';
        getElement('#tbMatKhau').innerHTML = arrNotif[7];
    } else {
        let valuePass = getElement('#password').value;
        if(valuePass.match(valuePass.length<6 || valuePass.length>10)) {
            isValid = false;
            getElement('#tbMatKhau').style.display = 'block';
            getElement('#tbMatKhau').innerHTML = arrNotif[8];
        }else if(/\d/.test(valuePass) && /[A-Z]/.test(valuePass) && /[^0-9a-zA-Z]/.test(valuePass)) {
            getElement('#tbMatKhau').style.display = 'none';
            isValid = true;
        } else {
            isValid = false;
            getElement('#tbMatKhau').style.display = 'block';
            getElement('#tbMatKhau').innerHTML = arrNotif[9];
        }
    }

    // check ngày làm ko để trống và định dạng mm/dd/yyyy
    let datepickerNotEmpty = checkInputNotEmpty('#datepicker');
    if(!datepickerNotEmpty) {
        isValid = false;
        getElement('#tbNgay').style.display = 'block';
        getElement('#tbNgay').innerHTML = arrNotif[10];
    } else {
        let valuedate = getElement('#datepicker').value;
        let rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
        let dtArray = valuedate.match(rxDatePattern); // is format OK?

        if (dtArray == null) {
            isValid = false;
            getElement('#tbNgay').style.display = 'block';
            getElement('#tbNgay').innerHTML = arrNotif[11];
        }

        //Checks for mm/dd/yyyy format.
        dtMonth = dtArray[1];
        dtDay= dtArray[3];
        dtYear = dtArray[5];        

        if (dtMonth < 1 || dtMonth > 12) {
                isValid = false;
            getElement('#tbNgay').style.display = 'block';
            getElement('#tbNgay').innerHTML = arrNotif[11];
            }
        else if (dtDay < 1 || dtDay> 31) {
                isValid = false;
            getElement('#tbNgay').style.display = 'block';
            getElement('#tbNgay').innerHTML = arrNotif[11];
            }
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) {
                isValid = false;
            getElement('#tbNgay').style.display = 'block';
            getElement('#tbNgay').innerHTML = arrNotif[11];
            }
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                    {
                        isValid = false;
            getElement('#tbNgay').style.display = 'block';
            getElement('#tbNgay').innerHTML = arrNotif[11];
                    }
        } else {
            getElement('#tbNgay').style.display = 'none';
            isValid = true;
        }
    }

    // check lương cơ bản
    let salaryBaseNotEmpty = checkInputNotEmpty('#luongCB');
    if(!salaryBaseNotEmpty) {
        isValid = false;
        getElement('#tbLuongCB').style.display = 'block';
        getElement('#tbLuongCB').innerHTML = arrNotif[12];
    } else {
        let valueSalaryBase = getElement('#luongCB').value;
        if(valueSalaryBase<1000000 || valueSalaryBase>20000000) {
            isValid = false;
            getElement('#tbLuongCB').style.display = 'block';
            getElement('#tbLuongCB').innerHTML = arrNotif[13];
        } else {
            getElement('#tbLuongCB').style.display = 'none';
            isValid = true;
        }
    }

    // check chức vụ phải là Giám đốc, trưởng phòng, nhân viên
    let chucvuNotEmpty = checkInputNotEmpty('#chucvu');
    if(!chucvuNotEmpty) {
        isValid = false;
        getElement('#tbChucVu').style.display = 'block';
        getElement('#tbChucVu').innerHTML = arrNotif[14];
    } else {
        getElement('#tbChucVu').style.display = 'none';
        isValid = true;
    }

    // check số giờ làm phải từ 80-200 giờ
    let gioLamNotEmpty = checkInputNotEmpty('#gioLam');
    if(!gioLamNotEmpty) {
        isValid = false;
        getElement('#tbGiolam').style.display = 'block';
        getElement('#tbGiolam').innerHTML = arrNotif[15];
    } else {
        let valueGiolam = getElement('#gioLam').value;
        if(valueGiolam<80 || valueGiolam>200) {
            isValid = false;
            getElement('#tbGiolam').style.display = 'block';
            getElement('#tbGiolam').innerHTML = arrNotif[16];
        } else {
            getElement('#tbGiolam').style.display = 'none';
            isValid = true;
        }
    }


    return isValid;
    
}