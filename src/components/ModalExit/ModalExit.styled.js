import styled from 'styled-components'

export const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	
`

export const ModalContent = styled.div`
	position: relative;
	background-color: rgba(255, 255, 255, 0.10);
	padding: 20px;
	overflow: hidden;
	max-width: 1000px;
	border-radius: 8px;
	width: 533px;
height: 447px;
flex-shrink: 0;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

/* background: var(--Form-color, rgba(255, 255, 255, 0.10)); */
/* form effects */
box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(50px);

h3{
	color: #FBFBFB;
/* font-family: Poppins; */
font-size: 26.963px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
p{
	color: #FFF;
/* font-family: Poppins; */
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
button{
width: 300px;
height: 50px;
flex-shrink: 0;
border-radius: 20px;
background: #FCFCFC;
box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
text-align: center;
/* font-family: Poppins; */
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.8px;
text-transform: uppercase;
cursor: pointer;
	color: #FFF;
	background: var(--button-gradient, linear-gradient(97deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%));
}
`
export const ModalButtonClose = styled.button`
background-color: #FCFCFC;
`
