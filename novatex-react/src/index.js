import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Goods} from "./js/goods";
// import {Cart} from "./js/cart";
// import {Order} from "./js/order";
import {RegisterLogin} from "./js/register-login";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  userLogToggle = () => {
    let {dataUserLogined, userLogToggle} = this.props;
    userLogToggle(dataUserLogined);
  };

  render() {
    let {dataUserLogined, loginNeeded} = this.props;

    return (
      <div id="header-wrap">
        <header className="autoWidth">
          <ul className="moreNav" style={{display: 'block'}} >
            <li>
              <a href="#" id="cart-page" onClick={loginNeeded}>
                购物袋
                <i className="cart-num">
                  {dataUserLogined.carts && dataUserLogined.carts.length ? (' ( ' + dataUserLogined.carts.length + ' )') : ''}
                </i>
              </a>
            </li>
            <li><a href="#" id="order-page" onClick={loginNeeded}>订单</a></li>
            <li><a href="#" id="account" onClick={this.userLogToggle}>{dataUserLogined.isLogin ? '退出' : '登录'}</a></li>
          </ul>
          <a href="#" id="logo">novatex</a>
          <b className="cart">
            <i className={dataUserLogined.carts && dataUserLogined.carts.length ? 'active' : ''}>
            </i>
          </b>
        </header>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div id="footer-wrap">
        <footer className="autoWidth">
          <p>© 诺华（杭州）纺织有限公司 - 2017 NOVATEX Inc.</p>
        </footer>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataGoods: [
        {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic: 'img/SFJ-3335.jpg', pic_min: 'img/SFJ-3335-min.jpg'},
        {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic: 'img/SFJ-4200.jpg', pic_min: 'img/SFJ-4200-min.jpg'},
        {goodsId: 1010301, name: 'SFJ-3275', price: '129', pic: 'img/SFJ-3275.jpg', pic_min: 'img/SFJ-3275-min.jpg'},
        {goodsId: 1010401, name: 'SFJ-62779', price: '128', pic: 'img/SFJ-62779.jpg', pic_min: 'img/SFJ-62779-min.jpg'},
        {goodsId: 1010501, name: 'SFJ-HD078小绣花', price: '134', pic: 'img/SFJ-HD078xiuhua.jpg', pic_min: 'img/SFJ-HD078xiuhua-min.jpg'},
        {goodsId: 1010601, name: 'SFJ-4187', price: '61', pic: 'img/SFJ-4187.jpg', pic_min: 'img/SFJ-4187-min.jpg'},
        {goodsId: 1010701, name: 'SFJ-3385', price: '140', pic: 'img/SFJ-3385.jpg', pic_min: 'img/SFJ-3385-min.jpg'},
        {goodsId: 1010801, name: 'SFJ-HD021', price: '94', pic: 'img/SFJ-HD021.jpg', pic_min: 'img/SFJ-HD021-min.jpg'},
        {goodsId: 1010901, name: 'SFJ-3391', price: '151', pic: 'img/SFJ-3391.jpg', pic_min: 'img/SFJ-3391-min.jpg'},
        {goodsId: 1011001, name: 'SFJ-C4369', price: '61', pic: 'img/SFJ-C4369.jpg', pic_min: 'img/SFJ-C4369-min.jpg'},
        {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic: 'img/SFJ-1201.jpg', pic_min: 'img/SFJ-1201-min.jpg'},
        {goodsId: 1011201, name: 'SFJ-HD078圆点', price: '139', pic: 'img/SFJ-HD078yuandian.jpg', pic_min: 'img/SFJ-HD078yuandian-min.jpg'},
        {goodsId: 1020101, name: 'BZ-4183', price: '26', pic: 'img/BZ-4183.jpg', pic_min: 'img/BZ-4183-min.jpg'},
        {goodsId: 1020201, name: 'BZ-52272', price: '85', pic: 'img/BZ-52272.jpg', pic_min: 'img/BZ-52272-min.jpg'},
        {goodsId: 1020301, name: 'BZ-4200', price: '17', pic: 'img/BZ-4200.jpg', pic_min: 'img/BZ-4200-min.jpg'},
        {goodsId: 1020401, name: 'BZ-L2024', price: '68', pic: 'img/BZ-L2024.jpg', pic_min: 'img/BZ-L2024-min.jpg'},
        {goodsId: 1020501, name: 'BZ-L2088', price: '110', pic: 'img/BZ-L2088.jpg', pic_min: 'img/BZ-L2088-min.jpg'},
        {goodsId: 1020601, name: 'BZ-HD046', price: '17', pic: 'img/BZ-HD046.jpg', pic_min: 'img/BZ-HD046-min.jpg'},
        {goodsId: 1020701, name: 'BZ-HD078小绣花', price: '62', pic: 'img/BZ-HD078xiuhua.jpg', pic_min: 'img/BZ-HD078xiuhua-min.jpg'},
        {goodsId: 1020801, name: 'BZ-S032', price: '168', pic: 'img/BZ-S032.jpg', pic_min: 'img/BZ-S032-min.jpg'},
        {goodsId: 1020901, name: 'BZ-S005', price: '184', pic: 'img/BZ-S005.jpg', pic_min: 'img/BZ-S005-min.jpg'},
        {goodsId: 1021001, name: 'BZ-K049', price: '53', pic: 'img/BZ-K049.jpg', pic_min: 'img/BZ-K049-min.jpg'},
        {goodsId: 1021101, name: 'BZ-L2027', price: '76', pic: 'img/BZ-L2027.jpg', pic_min: 'img/BZ-L2027-min.jpg'},
        {goodsId: 1021201, name: 'BZ-HD021', price: '48', pic: 'img/BZ-HD021.jpg', pic_min: 'img/BZ-HD021-min.jpg'},
        {goodsId: 1021301, name: 'BZ-S013', price: '89', pic: 'img/BZ-S013.jpg', pic_min: 'img/BZ-S013-min.jpg'},
        {goodsId: 1021401, name: 'BZ-K058', price: '51', pic: 'img/BZ-K058.jpg', pic_min: 'img/BZ-K058-min.jpg'},
        {goodsId: 1021501, name: 'BZ-PB01', price: '74', pic: 'img/BZ-PB01.jpg', pic_min: 'img/BZ-PB01-min.jpg'},
        {goodsId: 1021601, name: 'BZ-3275', price: '59', pic: 'img/BZ-3275.jpg#', pic_min: 'img/BZ-3275-min.jpg#'},
        {goodsId: 1021701, name: 'BZ-S017', price: '44', pic: 'img/BZ-S017.jpg', pic_min: 'img/BZ-S017-min.jpg'},
        {goodsId: 1021801, name: 'BZ-K048', price: '75', pic: 'img/BZ-K048.jpg', pic_min: 'img/BZ-K048-min.jpg'},
        {goodsId: 1021901, name: 'BZ-62294', price: '36', pic: 'img/BZ-62294.jpg', pic_min: 'img/BZ-62294-min.jpg'},
        {goodsId: 1022001, name: 'BZ-CM601', price: '41', pic: 'img/BZ-CM601.jpg', pic_min: 'img/BZ-CM601-min.jpg'},
        {goodsId: 1030101, name: 'ZB-L2024', price: '208', pic: 'img/ZB-L2024.jpg', pic_min: 'img/ZB-L2024-min.jpg'},
        {goodsId: 1030201, name: 'ZB-HD078小绣花', price: '185', pic: 'img/ZB-HD078xiuhua.jpg', pic_min: 'img/ZB-HD078xiuhua-min.jpg'},
        {goodsId: 1030301, name: 'ZB-HD118', price: '128', pic: 'img/ZB-HD118.jpg', pic_min: 'img/ZB-HD118-min.jpg'},
        {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic: 'img/ZB-C2868.jpg', pic_min: 'img/ZB-C2868-min.jpg'},
        {goodsId: 1030501, name: 'ZB-52838', price: '165', pic: 'img/ZB-52838.jpg', pic_min: 'img/ZB-52838-min.jpg'},
        {goodsId: 1030601, name: 'ZB-CM601', price: '145', pic: 'img/ZB-CM601.jpg', pic_min: 'img/ZB-CM601-min.jpg'},
        {goodsId: 1030701, name: 'ZB-HD021', price: '134', pic: 'img/ZB-HD021.jpg', pic_min: 'img/ZB-HD021-min.jpg'},
        {goodsId: 1030801, name: 'ZB-C3465', price: '88', pic: 'img/ZB-C3465.jpg', pic_min: 'img/ZB-C3465-min.jpg'},
        {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic: 'img/ZQ-L2024.jpg', pic_min: 'img/ZQ-L2024-min.jpg'},
        {goodsId: 1040201, name: 'ZQ-L2027', price: '145', pic: 'img/ZQ-L2027.jpg', pic_min: 'img/ZQ-L2027-min.jpg'},
        {goodsId: 1040301, name: 'ZQ-HD021', price: '93', pic: 'img/ZQ-HD021.jpg', pic_min: 'img/ZQ-HD021-min.jpg'},
        {goodsId: 1040401, name: 'ZQ-7801', price: '97', pic: 'img/ZQ-7801.jpg', pic_min: 'img/ZQ-7801-min.jpg'},
        {goodsId: 1050101, name: 'YD-4200', price: '39', pic: 'img/YD-4200.jpg', pic_min: 'img/YD-4200-min.jpg'},
        {goodsId: 1050201, name: 'YD-3275', price: '62', pic: 'img/YD-3275.jpg', pic_min: 'img/YD-3275-min.jpg'},
        {goodsId: 1050301, name: 'YD-HD118', price: '55', pic: 'img/YD-HD118.jpg', pic_min: 'img/YD-HD118-min.jpg'},
        {goodsId: 1050401, name: 'YD-62779', price: '65', pic: 'img/YD-62779.jpg', pic_min: 'img/YD-62779-min.jpg'},
        {goodsId: 1060101, name: 'CD-L2024', price: '27', pic: 'img/CD-L2024.jpg', pic_min: 'img/CD-L2024-min.jpg'},
        {goodsId: 1060201, name: 'CD-3335', price: '22', pic: 'img/CD-3335.jpg', pic_min: 'img/CD-3335-min.jpg'},
        {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic: 'img/CD-HD078xiuhua.jpg', pic_min: 'img/CD-HD078xiuhua-min.jpg'},
        {goodsId: 1060401, name: 'CD-52838', price: '27', pic: 'img/CD-52838.jpg', pic_min: 'img/CD-52838-min.jpg'},
        {goodsId: 1060501, name: 'CD-7814', price: '21', pic: 'img/CD-7814.jpg', pic_min: 'img/CD-7814-min.jpg'},
        {goodsId: 1060601, name: 'CD-HD118', price: '18', pic: 'img/CD-HD118.jpg', pic_min: 'img/CD-HD118-min.jpg'},
        {goodsId: 1060701, name: 'CD-C3869', price: '9', pic: 'img/CD-C3869.jpg', pic_min: 'img/CD-C3869-min.jpg'},
        {goodsId: 1060801, name: 'CD-CM601', price: '18', pic: 'img/CD-CM601.jpg', pic_min: 'img/CD-CM601-min.jpg'},
        {goodsId: 1070101, name: 'PD-L042', price: '124', pic: 'img/PD-L042.jpg', pic_min: 'img/PD-L042-min.jpg'},
        {goodsId: 1070201, name: 'PD-3385', price: '79', pic: 'img/PD-3385.jpg', pic_min: 'img/PD-3385-min.jpg'},
        {goodsId: 1070301, name: 'PD-S024', price: '75', pic: 'img/PD-S024.jpg', pic_min: 'img/PD-S024-min.jpg'},
        {goodsId: 1070401, name: 'PD-XH007', price: '114', pic: 'img/PD-XH007.jpg', pic_min: 'img/PD-XH007-min.jpg'}
      ],
      dataUser: [
        {
          userId: 1,
          email: 'momo0@gmail.com',
          password: '15280807171',
          isLogin: false,
          carts: [
            {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic_min: '../img/SFJ-3335-min.jpg', num: 1},
            {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic_min: '../img/SFJ-4200-min.jpg', num: 2},
            {goodsId: 1070401, name: 'PD-XH007', price: '114', pic_min: '../img/PD-XH007-min.jpg', num: 2}

          ],
          orders: [
            {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic_min: '../img/ZQ-L2024-min.jpg', num: 1, serial_num: '1708192022115941', date: [2017,8,19,19,50,49]},
            {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic_min: '../img/ZB-C2868-min.jpg', num: 2, serial_num: '1708192022113704', date: [2017,8,19,19,50,49]},
            {goodsId: 1021001, name: 'BZ-K049', price: '53', pic_min: '../img/BZ-K049-min.jpg', num: 2, serial_num: '1708192022112776', date: [2017,8,19,19,50,49]},
            {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic_min: '../img/SFJ-1201-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060101, name: 'CD-L2024', price: '27', pic_min: '../img/CD-L2024-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060201, name: 'CD-3335', price: '22', pic_min: '../img/CD-3335-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic_min: '../img/CD-HD078xiuhua-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060401, name: 'CD-52838', price: '27', pic_min: '../img/CD-52838-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060501, name: 'CD-7814', price: '21', pic_min: '../img/CD-7814-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060601, name: 'CD-HD118', price: '18', pic_min: '../img/CD-HD118-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
            {goodsId: 1060701, name: 'CD-C3869', price: '9', pic_min: '../img/CD-C3869-min.jpg', num: 1, serial_num: '1708192022110241', date: [2017,8,19,19,50,49]},
          ]
        }
      ],
      dataUserLogined: {
        userId: null,
        email: ' ',
        password: ' ',
        isLogin: false,
        carts: [],
        orders: [],
      },
      isLoginNeeded: false,
    }
  };

  userRegister = (dataUserNew) => {
    const {dataUser} = this.state;
    dataUser.unshift(dataUserNew);
    this.setState({
      dataUser,
    });
  };

  userLogin = (dataUserLogined) => {
    let {dataUser, isLoginNeeded} = this.state;
    dataUserLogined.isLogin = true;
    isLoginNeeded = false;
    this.setState({
      dataUser,
      dataUserLogined,
      isLoginNeeded,
    });
  };

  userLogout = () => {
    this.setState({
      dataUserLogined: {
        userId: null,
        email: ' ',
        password: ' ',
        isLogin: false,
        carts: [],
        orders: [],
      },
    });
  };

  userLogToggle = (dataUserLogined) => {
    if (!dataUserLogined.isLogin) {
      this.setState({
        isLoginNeeded: true,
      });
    } else {
      this.userLogout();
    }
  };

  loginNeeded = () => {
    const {dataUserLogined} = this.state;
    if (!dataUserLogined.isLogin) {
      this.setState({
        isLoginNeeded: true,
      });
    }
  };

  cartAdd = (ev) => {
    this.loginNeeded();
    let {dataGoods, dataUserLogined} = this.state;

    const goodsId = Number(ev.target.parentNode.childNodes[0].innerText);
    // const path = `../`;
    let sData = [];
    let isInclude = false;
    dataGoods.forEach(e => {
      if (e.goodsId === goodsId) {
        sData = JSON.parse(JSON.stringify(e));
      }
    });
    //如果已有同种商品
    dataUserLogined.carts.forEach(e => {
      if (e.goodsId === sData.goodsId) {
        e.num++;
        //同步更改原数据
        // dataNowOriginSync.carts[i].num++;
        isInclude = true;
      }
    });
    //如果没有同种商品
    if (!isInclude) {
      sData.num = 1;
      // sData.pic_min = path + sData.pic_min;
      dataUserLogined.carts.unshift(sData);
      //同步更改原数据
      // dataNowOriginSync.carts.unshift(sData);
    }

    this.setState({
      dataUserLogined,
    });
  };

  render() {
    const {dataGoods, dataUser, dataUserLogined, isLoginNeeded} = this.state;
    // const dataUserLogined = dataUser.find(e => e.isLogin) || [];
    const {userRegister, userLogin, userLogToggle, loginNeeded, cartAdd} = this;

    return (
      <div>
        <RegisterLogin
          dataUser={dataUser}
          userRegister={userRegister}
          userLogin={userLogin}
          dataUserLogined={dataUserLogined}
          isLoginNeeded={isLoginNeeded}
        />
        <Header
          dataUserLogined={dataUserLogined}
          userLogToggle={userLogToggle}
          loginNeeded={loginNeeded}
        />
        <Goods
          dataGoods={dataGoods}
          cartAdd={cartAdd}
        />
        {/*<Cart*/}
          {/*dataUser={dataUser}*/}
        {/*/>*/}
        {/*<Order />*/}
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);