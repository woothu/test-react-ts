import React from 'react';
import './App.css';
import CIcon from '@coreui/icons-react'
import { CChartBar } from '@coreui/react-chartjs'
import { 
  CAlert,
  CBadge,
  CHeaderBrand,
  CNavbarBrand,
  CSidebarBrand,
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CButton,
  CButtonClose,
  CButtonGroup,
  CButtonToolbar,
  CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImg,
  CCardImgOverlay,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CCollapse,
  CContainer,
  CCreateElement,
  CDataTable,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CElementCover,
  CEmbed,
  CEmbedItem,
  CFade,
  CFooter,
  CForm,
  CValidFeedback,
  CInvalidFeedback,
  CFormGroup,
  CFormText,
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CImg,
  CInput,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CSelect,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CJumbotron,
  CLabel,
  CLink,
  CCardLink,
  CListGroup,
  CListGroupItem,
  CMedia,
  CMediaBody,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavbar,
  CNavbarNav,
  CNavbarText,
  CNavItem,
  CNavLink,
  CPagination,
  CPopover,
  CProgress,
  CProgressBar,
  CRow,
  CSidebar,
  CSidebarFooter,
  CSidebarForm,
  CSidebarHeader,
  CSidebarMinimizer,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
  CSpinner,
  CSubheader,
  CSwitch,
  CTabContent,
  CTabPane,
  CTabs,
  CToast,
  CToastBody,
  CToaster,
  CToastHeader,
  CTooltip,
  CToggler,
  CWidgetBrand,
  CWidgetDropdown,
  CWidgetIcon,
  CWidgetProgress,
  CWidgetProgressIcon,
  CWidgetSimple
} from '@coreui/react'

React.icons = { icon: ["24 24", "<path d='M12 3.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zM17.834 19.334c-1.493 1.493-3.555 2.416-5.834 2.416-4.556 0-8.25-3.694-8.25-8.25s3.694-8.25 8.25-8.25c4.556 0 8.25 3.694 8.25 8.25v0c0 0.007 0 0.015 0 0.022 0 2.271-0.924 4.327-2.416 5.811l-0 0z'></path><path d='M12.75 7.5h-1.5v6.36l4.031 3.225 0.937-1.171-3.469-2.775v-5.64z'></path><path d='M1.076 5.381l7.125-4.875 0.847 1.238-7.125 4.875-0.847-1.238z'></path><path d='M14.951 1.744l0.847-1.238 7.125 4.875-0.847 1.238-7.125-4.875z'></path>"] }

function App() {
  return (
    <div className="App">
      <CChartBar
        datasets={[
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ]}
        labels="months"
        options={{
          tooltips: {
            enabled: true,
          }
        }}
        style={{ height: '100px' }}
      />
      <CIcon name="icon" />
      <CAlert >Content</CAlert>
      <CBadge>Content</CBadge>
      <CHeaderBrand>Content</CHeaderBrand>
      <CNavbarBrand>Content</CNavbarBrand>
      <CSidebarBrand>Content</CSidebarBrand>
      <CBreadcrumb>Content</CBreadcrumb>
      <CBreadcrumbItem>Content</CBreadcrumbItem>
      <CBreadcrumbRouter />
      <CButton>Content</CButton>
      <CButtonClose>Content</CButtonClose>
      <CButtonGroup>Content</CButtonGroup>
      <CButtonToolbar>Content</CButtonToolbar>
      <CCallout>Content</CCallout>
      <CCard>Content</CCard>
      <CCardBody>Content</CCardBody>
      <CCardFooter>Content</CCardFooter>
      <CCardGroup>Content</CCardGroup>
      <CCardHeader>Content</CCardHeader>
      <CCardImg />
      <CCardImgOverlay>Content</CCardImgOverlay>
      <CCardSubtitle>Content</CCardSubtitle>
      <CCardText>Content</CCardText>
      <CCardTitle>Content</CCardTitle>
      <CCarousel>
        <CCarouselCaption>Content</CCarouselCaption>
        <CCarouselControl direction="next">Content</CCarouselControl>
        <CCarouselIndicators />
        <CCarouselInner>Content</CCarouselInner>
        <CCarouselItem>Content</CCarouselItem>
      </CCarousel>
      <CCol>Content</CCol>
      <CCollapse>Content</CCollapse>
      <CContainer>Content</CContainer>
      <CCreateElement items={[]} />
      <CDataTable />
      <CDropdown>
        <CDropdownItem>Content</CDropdownItem>
        <CDropdownMenu>Content</CDropdownMenu>
        <CDropdownToggle>Content</CDropdownToggle>
      </CDropdown>
      <CElementCover>Content</CElementCover>
      <CEmbed>Content</CEmbed>
      <CEmbedItem>Content</CEmbedItem>
      <CFade>Content</CFade>
      <CFooter>Content</CFooter>
      <CForm>Content</CForm>
      <CValidFeedback>Content</CValidFeedback>
      <CInvalidFeedback>Content</CInvalidFeedback>
      <CFormGroup>Content</CFormGroup>
      <CFormText>Content</CFormText>
      <CHeader>Content</CHeader>
      <CHeaderNav>Content</CHeaderNav>
      <CHeaderNavItem>Content</CHeaderNavItem>
      <CHeaderNavLink>Content</CHeaderNavLink>
      <CImg />
      <CInput />
      <CTextarea />
      <CInputFile />
      <CInputCheckbox />
      <CInputRadio />
      <CSelect>Content</CSelect>
      <CInputGroup>Content</CInputGroup>
      <CInputGroupAppend>Content</CInputGroupAppend>
      <CInputGroupPrepend>Content</CInputGroupPrepend>
      <CInputGroupText>Content</CInputGroupText>
      <CJumbotron>Content</CJumbotron>
      <CLabel>Content</CLabel>
      <CLink target="_blank">Content</CLink>
      <CCardLink>Content</CCardLink>
      <CListGroup>Content</CListGroup>
      <CListGroupItem>Content</CListGroupItem>
      <CMedia>Content</CMedia>
      <CMediaBody>Content</CMediaBody>
      <CModal>Content</CModal>
      <CModalBody>Content</CModalBody>
      <CModalFooter>Content</CModalFooter>
      <CModalHeader>Content</CModalHeader>
      <CModalTitle>Content</CModalTitle>
      <CNav>Content</CNav>
      <CNavbar>Content</CNavbar>
      <CNavbarNav>Content</CNavbarNav>
      <CNavbarText>Content</CNavbarText>
      <CNavItem>Content</CNavItem>
      <CNavLink>Content</CNavLink>
      <CPagination onActivePageChange={() => {}} />
      <CPopover>
        <div>Content</div>
      </CPopover>
      <CProgress>Content</CProgress>
      <CProgressBar>Content</CProgressBar>
      <CRow>Content</CRow>
      <CSidebar>Content</CSidebar>
      <CSidebarFooter>Content</CSidebarFooter>
      <CSidebarForm>Content</CSidebarForm>
      <CSidebarHeader>Content</CSidebarHeader>
      <CSidebarMinimizer />
      <CSidebarNav>Content</CSidebarNav>
      <CSidebarNavDivider />
      <CSidebarNavDropdown>Content</CSidebarNavDropdown>
      <CSidebarNavItem>Content</CSidebarNavItem>
      <CSidebarNavTitle>Content</CSidebarNavTitle>
      <CSpinner />
      <CSubheader>Content</CSubheader>
      <CSwitch variant="3d" />
      <CTabContent>Content</CTabContent>
      <CTabPane>Content</CTabPane>
      <CTabs>Content</CTabs>
      <CToaster>
        <CToast show>
          <CToastHeader>Content</CToastHeader>
          <CToastBody>Content</CToastBody>
        </CToast>
      </CToaster>

      <CTooltip>
        <div>Tooltip</div>
      </CTooltip>
      <CToggler>Content</CToggler>
      <CWidgetBrand>Content</CWidgetBrand>
      <CWidgetDropdown>Content</CWidgetDropdown>
      <CWidgetIcon>Content</CWidgetIcon>
      <CWidgetProgress>Content</CWidgetProgress>
      <CWidgetProgressIcon>Content</CWidgetProgressIcon>
      <CWidgetSimple>Content</CWidgetSimple>
    </div>
  );
}

export default App;
