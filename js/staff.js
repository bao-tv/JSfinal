function Staff (
    tknv, 
    name, 
    email, 
    password, 
    datepicker, 
    luongCB, 
    chucvu, 
    gioLam  
) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
};

Staff.prototype.salaryStaff = function () {
    if(this.chucvu == 'Sếp') return this.luongCB * 3;
    if(this.chucvu == 'Trưởng phòng') return this.luongCB * 2;
    if(this.chucvu == 'Nhân viên') return this.luongCB;  
};

Staff.prototype.rankStaff = function () {
    if(this.gioLam >= 192) return 'Nhân viên xuất sắc';
    if(this.gioLam >= 176) return 'Nhân viên giỏi';
    if(this.gioLam >= 160) return 'Nhân viên khá';
    if(this.gioLam < 160) return 'Nhân viên trung bình';
}