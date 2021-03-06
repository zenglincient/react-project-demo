import React, { Component } from "react";

import Nav from "./components/navbar";
import ListPage from "./components/listPage";
import ItemA from './components/demo/hoc/itemA'  // show useage of HOC degsign patterns
import ItemB from './components/demo/hoc/itemB'
import ItemC from './components/demo/rp/ItemC'  // show useage of props design patterns
import NavLink from "./components/navLink"; // use Link with react-router-dom
import NotFound from "./components/notFound";
import { Button, Layout } from "antd";
import { Route, Switch, Redirect } from 'react-router-dom'

// layout with antd
const { Header, Footer, Sider, Content } = Layout

class App extends Component {

  constructor () {
    super()

    this.state = {
      listData: [
        {
          id: 1,
          name: "Sony 65寸高清液晶电视",
          price: 7000,
          stock: 1
        },
        {
          id: 2,
          name: "华为 Meta30",
          price: 6000,
          stock: 2
        },
        {
          id: 3,
          name: "华硕画家国度笔记本电脑",
          price: 10000,
          stock: 3
        }
      ]
    };
  }

  handleDelete = id => {
    const _list = this.state.listData.filter(item => item.id !== id);

    this.setState({
      listData: _list
    });
  };

  handleMinus = id => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.stock--;
        if (_item.stock < 0) _item.stock = 0;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data
    });
  };

  handlePlus = id => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.stock++;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data
    });
  };

  handleReset = () => {
    const _list = this.state.listData.map(item => {
      const _item = { ...item };
      _item.stock = 0;
      return _item;
    });

    this.setState({
      listData: _list
    });
  };


  render() {
    return (
      <>
        <Layout>
          <Header>
            <Nav
              onReset={this.handleReset}
              itemNum={this.state.listData.length}
            ></Nav>
           
          </Header>
          
          <Content className="contain">
            <NavLink></NavLink>
            {/* Swith to make router match only one */}
            <Switch>
              {/* dynamics routers with /:id? */}
              <Route path="/name/:id/:sel?" component={ItemB}>
              </Route>
              
              {/* use component with special props by use render function */}
              <Route path="/name" render={(() => <ItemC val="cat" {...this.props}></ItemC>)}>
              </Route>

              {/* Redirect some name to special name */}
              <Redirect from="/somename" to="/name"></Redirect>

              {/* add not found route */}
              <Route path="/not-found" component={NotFound}></Route>

              {/* mian path */}
              <Route exact path="/" component={ItemA}>
              </Route>

              {/* any route redirect to not found */}
              <Redirect to="/not-found"></Redirect>
            </Switch>

            <Button type="primary">222</Button>

            <ListPage
              listData={this.state.listData}
              handleMinus={this.handleMinus}
              handlePlus={this.handlePlus}
              handleDelete={this.handleDelete}
            />
          </Content>
          <Footer></Footer>
        </Layout>
      </>
    );
  }
}

export default App;
