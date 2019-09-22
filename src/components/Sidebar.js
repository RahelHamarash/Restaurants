import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import MetisMenu from 'metismenujs/dist/metismenujs';
import profilePic from '../assets/images/users/user-1.jpg';


const SideNavContent = (props) => {

    return <React.Fragment>

        <div id="sidebar-menu">
            <ul className="metismenu" id="side-menu">

                {/* Dashboard */}
                <li className="menu-title">سەرەتا</li>

                <li>
                    <Link to="/" className="waves-effect side-nav-link-ref">
                        <i className="mdi mdi-view-dashboard"></i>
                        <span> داشبۆرد </span>
                    </Link>
                </li>
                {/* Inventory */}
                <li className="menu-title">کۆگا</li>

                    <ul className="nav-second-level nav" >
                        
                        <li className={props.state.classButton ? "active" : ""}>
                            <Link to="#" className="waves-effect"  aria-expanded="false" onClick={props.classHandler} >
                                <i className="mdi mdi-share-variant"></i>
                                <span > پۆل </span>
                                <span className="menu-arrow "></span>
                            </Link>
                            
                            <li style={{ display: props.state.classButton ? 'inline' : 'none' }}>
                                <Link to="/level" className="side-nav-link-ref" >Level 1.1</Link>
                            </li>
                        </li>
                        <li className={props.state.itemsButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.itemsHandler}>ماددەکان
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.itemsButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="menu-title">داخڵکردن</li>
                        <li className={props.state.providerButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.providerHandler}>دابینکەر
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.providerButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.purchaseButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.purchaseHandler}>کڕین
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.purchaseButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="menu-title">داهات</li>
                        <li className={props.state.saleButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.saleHandler}>فرۆشتن
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.saleButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.safeButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.safeHandler}>کاسە
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.safeButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.billTypesButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.billTypesHandler}>جۆرەکانی خەرجی
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.billTypesButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.billsButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.billsHandler}> خەرجییەکان
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.billsButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.reportButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.reportHandler}> ڕاپۆرت
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.reportButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="menu-title">سیستەم</li>

                        <li className={props.state.userButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.userHandler}> بەکارهێنەر
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.userButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>
                        <li className={props.state.tablesButton ? "active" : ""}>
                            <Link to="#" className="has-dropdown" onClick={props.tablesHandler}>مێزەکان
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul className="nav-third-level nav" style={{ display: props.state.tablesButton ? 'inline' : 'none' }}>
                                <li>
                                    <Link to="#" className="side-nav-link-ref" >Level 2.1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="side-nav-link-ref">Level 2.2</Link>
                                </li>
                                
                            </ul>
                        </li>


                    </ul>
            </ul>
        </div>
        <div className="clearfix"></div>
    </React.Fragment>
}

const UserProfile = () => {
    return <React.Fragment>
        <div className="user-box text-center">
            <img src={profilePic} alt="user-img" title="Nik Patel" className="rounded-circle img-thumbnail avatar-lg" />
            <UncontrolledDropdown>
                <DropdownToggle caret tag="a" className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block">
                    Nik Patel
                </DropdownToggle>
                <DropdownMenu className="user-pro-dropdown">
                    <DropdownItem>
                        <i className="fe-user mr-1"></i>
                        <span>My Account</span>
                    </DropdownItem>
                    <DropdownItem>
                        <i className="fe-settings mr-1"></i>
                        <span>Settings</span>
                    </DropdownItem>
                    <DropdownItem>
                        <i className="fe-lock mr-1"></i>
                        <span>Lock Screen</span>
                    </DropdownItem>
                    <DropdownItem>
                        <i className="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <p className="text-muted">Admin Head</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/" className="text-muted">
                        <i className="mdi mdi-settings"></i>
                    </Link>
                </li>

                <li className="list-inline-item">
                    <Link to="/" className="text-custom">
                        <i className="mdi mdi-power"></i>
                    </Link>
                </li>
            </ul>
        </div>
    </React.Fragment>
}


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleOtherClick = this.handleOtherClick.bind(this);
        this.initMenu = this.initMenu.bind(this);

        this.state = {

            classButton : false ,
            itemsButton : false,
            providerButton : false,
            purchaseButton : false ,
            saleButton : false,
            safeButton : false,
            billsButton : false,
            reportButton : false,
            userButton : false ,
            tablesButton : false
        }

        this.ClassHandler = this.ClassHandler.bind(this) ;
        this.ItemsHandler = this.ItemsHandler.bind(this) ;
        this.ProviderHandler = this.ProviderHandler.bind(this) ;
        this.PurchaseHandler = this.PurchaseHandler.bind(this);
        this.SaleHandler = this.SaleHandler.bind(this);
        this.SafeHandler = this.SafeHandler.bind(this);
        this.BillTypesHandler = this.BillTypesHandler.bind(this) ;
        this.BillsHandler = this.BillsHandler.bind(this) ; 
        this.ReportHandler = this.ReportHandler.bind(this) ;
        this.UserHandler = this.UserHandler.bind(this) ;
        this.TablesHandler = this.TablesHandler.bind(this) ;


    }

    ClassHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({
            classButton: !state.classButton 
          }));
        
    }

    ItemsHandler(e){

        e.preventDefault();
        this.setState((state) => ({

            itemsButton : !state.itemsButton
        }))
    }

    ProviderHandler(e){

        e.preventDefault();
        this.setState((state)=>({

            providerButton : !state.providerButton
        }))
    }

    PurchaseHandler(e){

        e.preventDefault();
        this.setState((state) => ({

            purchaseButton : !state.purchaseButton
        }))
    }

    SaleHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({

            saleButton : !state.saleButton
        }))
    }

    SafeHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({

            safeButton : !state.safeButton
        }))
    }

    BillTypesHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({

            billTypesButton : !state.billTypesButton
        }))
    }

    BillsHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({

            billsButton : !state.billsButton
        }))
        
    }

    ReportHandler(e){

        e.preventDefault() ;
        this.setState((state) => ({

            reportButton : !state.reportButton
        }))
        
    }

    UserHandler(e){


        e.preventDefault() ;
        this.setState((state) => ({

            userButton : !state.userButton
        }))

    }

    TablesHandler(e){


        e.preventDefault() ;
        this.setState((state) => ({

            tablesButton : !state.tablesButton
        }))

    }



    /**
     * Bind event
     */
    componentWillMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    }


    /**
     * 
     */
    componentDidMount = () => {
        this.initMenu();
    }

    /**
     * Component did update
     */
    componentDidUpdate = (prevProps) => {
        if (this.props.isCondensed !== prevProps.isCondensed) {
            if (prevProps.isCondensed) {
                document.body.classList.remove("sidebar-enable");
                document.body.classList.remove("enlarged");
            } else {
                document.body.classList.add("sidebar-enable");
                const isSmallScreen = window.innerWidth < 768;
                if (!isSmallScreen) {
                    document.body.classList.add("enlarged");
                }
            }

            this.initMenu();
        }
    }

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    }

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e) => {
        if (this.menuNodeRef.contains(e.target))
            return;
        // else hide the menubar
        document.body.classList.remove('sidebar-enable');
    }

    /**
     * Init the menu
     */
    initMenu = () => {
        // render menu
        new MetisMenu("#side-menu");
        var links = document.getElementsByClassName('side-nav-link-ref');
        var matchingMenuItem = null;
        for (var i = 0; i < links.length; i++) {
            if (this.props.location.pathname === links[i].pathname) {
                matchingMenuItem = links[i];
                break;
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;

            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3. 
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('in');
                }
                const parent3 = parent2.parentElement;
                if (parent3) {
                    parent3.classList.add('active');
                    var childAnchor = parent3.querySelector('.has-dropdown');
                    if (childAnchor) childAnchor.classList.add('active');
                }

                const parent4 = parent3.parentElement;
                if (parent4)
                    parent4.classList.add('in');
                const parent5 = parent4.parentElement;
                if (parent5)
                    parent5.classList.add('active');
            }
        }
    }

    render() {
        const isCondensed = this.props.isCondensed || false;

        return (
            <React.Fragment>
                <div className='left-side-menu' ref={node => this.menuNodeRef = node}>
                    {<PerfectScrollbar><UserProfile /><SideNavContent state={this.state} classHandler={this.ClassHandler} itemsHandler={this.ItemsHandler} providerHandler={this.ProviderHandler} purchaseHandler={this.PurchaseHandler} saleHandler={this.SaleHandler} safeHandler={this.SafeHandler} billTypesHandler={this.BillTypesHandler} billsHandler={this.BillsHandler} reportHandler={this.ReportHandler} userHandler={this.UserHandler} tablesHandler={this.TablesHandler}/></PerfectScrollbar>}
                    {isCondensed && <UserProfile /> && <SideNavContent state={this.state} classHandler={this.ClassHandler} itemsHandler={this.ItemsHandler} providerHandler={this.ProviderHandler} purchaseHandler={this.PurchaseHandler} saleHandler={this.SaleHandler} safeHandler={this.SafeHandler} billTypesHandler={this.BillTypesHandler} billsHandler={this.BillsHandler} reportHandler={this.ReportHandler} userHandler={this.UserHandler} tablesHandler={this.TablesHandler}/>}
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(Sidebar);
