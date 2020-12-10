import React from "react";
import { Wrapper, LeftContentWrapper, RightContentWrapper, LogoWrapper, Logo, MenuWrapper, MenuItem } from './page-header.style'

const PageHeader = (props) => {
     return (
      <Wrapper>
         <LeftContentWrapper>
          <LogoWrapper>
            <img src="./../../../../assets/ulriken-logo.png"></img>
          </LogoWrapper>  
        </LeftContentWrapper>
        <RightContentWrapper>
          <MenuWrapper>
            <MenuItem onClick={() => props.hjem()}>Home</MenuItem> 
            <MenuItem onClick={() => { props.tilProduktListen()}}>Products</MenuItem> 
            <MenuItem onClick={() => { props.tilShoppingCart()}}>ShoppingCart</MenuItem> 
          </MenuWrapper>
        </RightContentWrapper>
      </Wrapper>
    );
};

export default PageHeader;