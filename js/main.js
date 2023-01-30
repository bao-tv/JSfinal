let  staffList = [];

function addStaff() {
    getElement('#btnCapNhat').disabled = true;
}

function closeForm() {
    getElement('#btnCapNhat').disabled = false;
    getElement('#tknv').disabled = false;
    getElement('#btnThemNV').disabled = false;
}

function createStaff() {
    // DOM get info EL
    let tknv = getElement('#tknv').value;
    let name = getElement('#name').value;
    let email = getElement('#email').value;
    let password = getElement('#password').value;
    let datepicker = getElement('#datepicker').value;
    let luongCB = +getElement('#luongCB').value;
    let chucvu = getElement('#chucvu').value;
    let gioLam = getElement('#gioLam').value;

    // kiểm tra validate của input
    let isValid = validate();
    if(!isValid) return;

    // khởi tạo Object
    const staff = new Staff(tknv,name, email,password,datepicker,luongCB,chucvu,gioLam);
    // thêm staff vào mảng
    staffList.push(staff);

    //hiển thị ra table 
    renderTable(staffList);
    console.log(staffList);

    // reset form
    resetForm();
}

// hàm search
function searchStaff() {
    let search = getElement('#searchName').value;

    let newStaff = staffList.filter((staff) => {
        let typeStaff = staff.rankStaff().toLowerCase();
        search = search.toLowerCase();
        return typeStaff.indexOf(search) !== -1;
    })

    renderTable(newStaff);
}

// hàm điều chỉnh Nhân viên
function adjustStaff(staffTKNV) {
    let staffSelect = staffList.find((staff) => {
        return staff.tknv === staffTKNV;
    });
    // ĐƯA LÊN FORM
    getElement('#tknv').value = staffSelect.tknv;
    getElement('#name').value = staffSelect.name;
    getElement('#email').value = staffSelect.email;
    getElement('#password').value = staffSelect.password;
    getElement('#datepicker').value = staffSelect.datepicker;
    getElement('#luongCB').value = staffSelect.luongCB;
    getElement('#chucvu').value = staffSelect.chucvu;
    getElement('#gioLam').value = staffSelect.gioLam;

    // disable input mã NV và btn thêm NV
    getElement('#tknv').disabled = true;
    getElement('#btnThemNV').disabled = true;
}

// hàm update info NV
function updateStaff() {
    // Dom
    let tknv = getElement('#tknv').value;
    let name = getElement('#name').value;
    let email = getElement('#email').value;
    let password = getElement('#password').value;
    let datepicker = getElement('#datepicker').value;
    let luongCB = +getElement('#luongCB').value;
    let chucvu = getElement('#chucvu').value;
    let gioLam = getElement('#gioLam').value;

    // khởi tạo Object Staff
    const staff = new Staff(tknv,name, email,password,datepicker,luongCB,chucvu,gioLam);

    // update info NV cần chỉnh vào bảng
    let index = staffList.findIndex((staff) => {
        return staff.tknv === tknv
    });

    staffList[index] = staff;

    renderTable(staffList);

    resetForm();

}

// Hàm delete
function deleteStaff (staffTKNV) {
    staffList = staffList.filter((staff) => {
        return staff.tknv !== staffTKNV;
    });

    renderTable(staffList);
}

// hàm renderTable
function renderTable(staffList) {
    let html = '';
    for (let i = 0; i<staffList.length; i++) {
        let staff = staffList[i];
        html += `
        <tr>
            <td>${staff.tknv}</td>
            <td>${staff.name}</td>
            <td>${staff.email}</td>
            <td>${staff.datepicker}</td>
            <td>${staff.chucvu}</td>
            <td>${staff.salaryStaff()}</td>
            <td>${staff.rankStaff()}</td>
            <td>
          <button class = 'btn btn-primary' data-toggle="modal"
          data-target="#myModal" onclick="adjustStaff('${staff.tknv}')">Chỉnh sửa</button>
          <button class = 'btn btn-danger' onclick="deleteStaff('${staff.tknv}')">Xóa</button>
        </td>
        </tr>
        `
    }
    getElement('#tableDanhSach').innerHTML = html;
}

// hàm resetform
function resetForm() {
    getElement('#tknv').value = '';
    getElement('#name').value = '';
    getElement('#email').value = '';
    getElement('#password').value = '';
    getElement('#datepicker').value = '';
    getElement('#luongCB').value = '';
    getElement('#chucvu').value = '';
    getElement('#gioLam').value = '';


}

function getElement(selector) {
    return document.querySelector(selector);
  }

