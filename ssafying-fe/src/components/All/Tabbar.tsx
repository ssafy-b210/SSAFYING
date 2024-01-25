import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabBarWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.visible ? "0" : "-60px")};
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  transition: bottom 0.3s;
  z-index: 1000;
`;

const TabBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TabBarWrapper visible={visible}>
      {/* Add your tab bar content here */}
      Tab 1 | Tab 2 | Tab 3
    </TabBarWrapper>
  );
};

export default TabBar;
