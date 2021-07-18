import './App.css';
import Header from './components/base/Header';
import SideBar from './components/base/SideBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import JobManagement from './components/pages/jobDescription/JobManagement';
import CompanyManagement from './components/pages/CompanyManagement.js/CompanyManagement';
import UserManagement from './components/pages/UserManagement/UserManagement';
import JobDescription from './components/pages/jobDescription/JobDescription';
import ProfileSetting from './components/pages/ProfileSetting/ProfileSetting';
import { Fragment, useState, useRef } from 'react';
import LoginPage from './components/pages/Login/LoginPage';
import ForgotPassword from './components/pages/Login/ForgotPassword';
import ResetPassword from './components/pages/Login/ResetPassword';
import CreateJob from './components/Models/CreateJob';
import CreateCompany from './components/Models/CreateCompany';
import EditCompany from './components/Models/EditCompany';
import EditJob from './components/Models/EditJob';
import AccessManagement from './components/pages/AccessManagement/AccessManagement';
import AssignUser from './components/Models/AssignUser';
import EditAssignUser from './components/Models/EditAssignUser';
import CreateUser from './components/Models/CreateUser';
import EditUser from './components/Models/EditUser';
import EmployeeProfile from './components/pages/Employee/EmployeeProfile';
import ChatList from './components/pages/ChatList/ChatList';
import TopBar from './components/pages/Landing/TopBar';
import UserProfile from './components/pages/UserProfile/UserProfile';
import LandingPageNew from './components/pages/Landing/LandingPageNew';
import LandingPage from './components/pages/Landing/LandingPage';
import SignUp from './components/pages/Login/SignUp';
import PrivacyPolicy from './components/pages/Landing/PrivacyPolicy';
import ContactUs from './components/pages/Landing/ContactUs';
import FooterBar from './components/pages/Landing/FooterBar';
import TermsCondition from './components/pages/Landing/TermsCondition';
import { Provider } from 'react-redux';
import store from './store';
import FaqBusiness from './components/pages/Landing/FaqBusiness';
import FaqWorker from './components/pages/Landing/FaqWorker';
import AboutUs from './components/pages/Landing/AboutUs';
import ScrollToTop from './components/ScrollTop';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [indiChat, setIndiChat] = useState(false);
  const [carrowUpdate, setCArrawUpdate] = useState('up');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSetIndiChat = () => {
    if (!indiChat) {
      setIndiChat(true);
      setCArrawUpdate('down');
    } else {
      setIndiChat(false);
      setTimeout(() => {
        setCArrawUpdate('down');
        setIndiChat(true);
      }, 100);
    }

    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };
  const handleSetModalShowTrue = () => {
    setModalShow(true);
  };
  const handleSetModalShowFalse = () => {
    setModalShow(false);
  };

  const [modalShowEdit, setModalShowEdit] = useState(false);
  const handleSetModalShowEditTrue = () => {
    setModalShowEdit(true);
  };
  const handleSetModalShowEditFalse = () => {
    setModalShowEdit(false);
  };

  const [modalShowCompany, setModalShowCompany] = useState(false);
  const handleSetAddCompanyTrue = () => {
    setModalShowCompany(true);
  };
  const handleSetAddCompanyFalse = () => {
    setModalShowCompany(false);
  };

  const [modalShowCompanyEdit, setModalShowEditCompany] = useState(false);
  const handleSetEditCompanyTrue = () => {
    setModalShowEditCompany(true);
  };
  const handleSetEditCompanyFalse = () => {
    setModalShowEditCompany(false);
  };

  const [modalShowAssign, setModalShowAssign] = useState(false);
  const handleModalShowAssign = () => {
    setModalShowAssign(true);
  };
  const handleModalhideAssign = () => {
    setModalShowAssign(false);
  };

  const [modalEditAssign, setModalEditAssign] = useState(false);
  const handleModalEditAssignShow = () => {
    setModalEditAssign(true);
  };
  const handleModalEditAssignHide = () => {
    setModalEditAssign(false);
  };

  const [modalShowUser, setModalShowUser] = useState(false);
  const handleModalShowUser = () => {
    setModalShowUser(true);
  };
  const handleModalhideUser = () => {
    setModalShowUser(false);
  };

  const [modalEditUser, setModalEditUser] = useState(false);
  const handleModalEditUserShow = () => {
    setModalEditUser(true);
  };
  const handleModalEditUserHide = () => {
    setModalEditUser(false);
  };

  return (
    <Provider store={store}>
      <div className='site-wrapper overflow-hidden bg-default-2 min-h-100vh'>
        <Router>
          <ScrollToTop />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={SignUp} />
          <Route exact path='/privacy-policy'>
            <TopBar />
            <PrivacyPolicy />
          </Route>
          <Route exact path='/terms-and-conditions'>
            <TopBar />
            <TermsCondition />
          </Route>
          <Route exact path='/'>
            <TopBar />
            <LandingPageNew />
            <ChatList
              handleSetIndiChat={handleSetIndiChat}
              indiChat={indiChat}
              messagesEndRef={messagesEndRef}
              setIndiChat={setIndiChat}
              setCArrawUpdate={setCArrawUpdate}
              carrowUpdate={carrowUpdate}
            />
            <FooterBar />
          </Route>
          <Route exact path='/worker'>
            <TopBar />
            <LandingPage />

            <ChatList
              handleSetIndiChat={handleSetIndiChat}
              indiChat={indiChat}
              messagesEndRef={messagesEndRef}
              setIndiChat={setIndiChat}
              setCArrawUpdate={setCArrawUpdate}
              carrowUpdate={carrowUpdate}
            />
            <FooterBar />
          </Route>
          <Route exact path='/about-us'>
            <TopBar />
            <AboutUs />
            <FooterBar />
          </Route>
          <Route exact path='/contact-us'>
            <TopBar />
            <ContactUs />
            <FooterBar />
          </Route>
          <Route exact path='/faq-business'>
            <TopBar />
            <FaqBusiness />
            <FooterBar />
          </Route>
          <Route exact path='/faq-worker'>
            <TopBar />
            <FaqWorker />
            <FooterBar />
          </Route>
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path='/reset-password' component={ResetPassword} />
          <CreateJob showModal={modalShow} setModal={handleSetModalShowFalse} />
          <Fragment>
            <Switch>
              <Route exact path='/job-management'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <EditJob
                  showModal={modalShowEdit}
                  setModal={handleSetModalShowEditFalse}
                />
                <JobManagement editjob={handleSetModalShowEditTrue} />
              </Route>
              <Route exact path='/company-management'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <CompanyManagement
                  createCompany={handleSetAddCompanyTrue}
                  editCompany={handleSetEditCompanyTrue}
                />
                <CreateCompany
                  showModal={modalShowCompany}
                  setModal={handleSetAddCompanyFalse}
                />
                <EditCompany
                  showModal={modalShowCompanyEdit}
                  setModal={handleSetEditCompanyFalse}
                />
              </Route>
              <Route exact path='/user-management'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <UserManagement
                  createUser={handleModalShowUser}
                  editUser={handleModalEditUserShow}
                />
                <CreateUser
                  showModal={modalShowUser}
                  setModal={handleModalhideUser}
                />
                <EditUser
                  showModal={modalEditUser}
                  setModal={handleModalEditUserHide}
                />
              </Route>
              <Route exact path='/job-management/view'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <JobDescription handleSetIndiChat={handleSetIndiChat} />
                <ChatList
                  handleSetIndiChat={handleSetIndiChat}
                  indiChat={indiChat}
                  messagesEndRef={messagesEndRef}
                  setIndiChat={setIndiChat}
                  setCArrawUpdate={setCArrawUpdate}
                  carrowUpdate={carrowUpdate}
                />
              </Route>
              <Route exact path='/settings'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <ProfileSetting />
              </Route>
              <Route exact path='/access-management'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <AccessManagement
                  createAssign={handleModalShowAssign}
                  editAssign={handleModalEditAssignShow}
                />
                <AssignUser
                  showModal={modalShowAssign}
                  setModal={handleModalhideAssign}
                />
                <EditAssignUser
                  showModal={modalEditAssign}
                  setModal={handleModalEditAssignHide}
                />
              </Route>
              <Route exact path='/profiles/view'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <EmployeeProfile />
              </Route>
              <Route exact path='/edit-profile'>
                <Header />
                <SideBar createjob={handleSetModalShowTrue} />
                <EditJob
                  showModal={modalShowEdit}
                  setModal={handleSetModalShowEditFalse}
                />
                <UserProfile />
              </Route>
            </Switch>
          </Fragment>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
