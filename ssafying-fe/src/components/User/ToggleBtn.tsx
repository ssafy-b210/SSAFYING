import styled from "styled-components";
function Toggle() {
  return (
    <ToggleContainer>
      <input type="checkbow" id="toggle" defaultChecked />
      <label htmlFor="toggle" className="toggleSwitch">
        <span className="toggleButton"></span>
      </label>
    </ToggleContainer>
  );
}
export default Toggle;

const ToggleContainer = styled.div`
  .toggleSwitch {
    width: 100px;
    height: 50px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
    cursor: pointer;
  }

  .toggleSwitch .toggleButton {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #f03d3d;
  }
  #toggle:checked ~ .toggleSwitch {
    background: #f03d3d;
  }

  #toggle:checked ~ .toggleSwitch .toggleButton {
    left: calc(100% - 44px);
    background: #fff;
  }

  .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
  .toggleSwitch.active {
    background: #f03d3d;
  }

  .toggleSwitch.active .toggleButton {
    left: calc(100% - 44px);
    background: #fff;
  }
`;
