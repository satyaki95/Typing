import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }
body{
    background: black;
    color:white;
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    font-family: 'Play', sans-serif;
}

.canvas{
    display: grid;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    min-height:100vh;
    gap:0.5rem;
    padding:1rem;
    width:100vw;
    align-items:center;
}

.type-box{
    display:block;
    max-width:1000px;
    height:160px;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    overflow:hidden;
    font-family: 'Kalam', cursive;
}
.words{
    font-size:25px;
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    width:100%;
}
.word{
    margin:5px;
    padding-right:2px;
}
.hidden-input{
    opacity:0;
}

.correct{
    color:green;
}
.incorrect{
    color:red;
}
.current{
    border-left:1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;

    @keyframes blinking{
        0% {border-left-color:#fff;}
        25% {border-left-color:black;}
        50% {border-left-color:#fff;}
        75% {border-left-color:black;}
        100% {border-left-color:#fff;}
    }
}
.right{
    border-right:1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;

    @keyframes blinkingRight{
        0% {border-right-color:#fff;}
        25% {border-right-color:black;}
        50% {border-right-color:#fff;}
        75% {border-right-color:black;}
        100% {border-right-color:#fff;}
    }
}

.upper-menu{
    display:flex;
    max-width:1000px;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
    font-size:20px;
    padding:1rem;
}

.counter{
    cursor:none;
}

.time-modes{
    display:flex;
}

.time{
    margin-right:15px;

    &:hover{
        color: rebeccapurple;
        cursor:pointer;
    }
}

.stats-box{
    display:flex;
    max-width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
}

.title{
    font-size:20px;
    color:gray;
}

.subtitle{
    font-size:30px;
    color:#00563B;
}

.left-stats{
    width:30%;
    pading:30px;
}

.right-stats{
    width:70%;
}
`;