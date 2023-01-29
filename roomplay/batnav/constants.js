/* -----CONSTANTS---------------------------------------------------------------------------------------------------------------------- */

const grid = document.querySelector('.grid')
const selectGame = document.querySelector('.selectGame')
const startButton = document.getElementById('startButton')
const roundPlayer = document.getElementById('roundPlayer')
const scorePlayer = document.getElementById('scorePlayer')
const targetListPlayer = document.querySelector('.targetListPlayer')
const roundIa = document.getElementById('roundIa')
const scoreIa = document.getElementById('scoreIa')
const targetListIa = document.querySelector('.targetListIa')
const winOrLose = document.querySelector('.winOrLose')

const aircraftCarrierPlayer = document.getElementById('aircraftCarrierPlayer')
const cruiserPlayer = document.getElementById('cruiserPlayer')
const submarinePlayer1 = document.getElementById('submarinePlayer1')
const submarinePlayer2 = document.getElementById('submarinePlayer2')
const torpedoBoatPlayer1 = document.getElementById('torpedoBoatPlayer1')
const torpedoBoatPlayer2 = document.getElementById('torpedoBoatPlayer2')
const torpedoBoatPlayer3 = document.getElementById('torpedoBoatPlayer3')

const aircraftCarrierIa = document.getElementById('aircraftCarrierIa')
const cruiserIa = document.getElementById('cruiserIa')
const submarineIa1 = document.getElementById('submarineIa1')
const submarineIa2 = document.getElementById('submarineIa2')
const torpedoBoatIa1 = document.getElementById('torpedoBoatIa1')
const torpedoBoatIa2 = document.getElementById('torpedoBoatIa2')
const torpedoBoatIa3 = document.getElementById('torpedoBoatIa3')

const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const A4 = document.getElementById('A4')
const A5 = document.getElementById('A5')
const A6 = document.getElementById('A6')
const A7 = document.getElementById('A7')
const A8 = document.getElementById('A8')
const A9 = document.getElementById('A9')
const A10 = document.getElementById('A10')
const A11 = document.getElementById('A11')
const A12 = document.getElementById('A12')
const A13 = document.getElementById('A13')
const A14 = document.getElementById('A14')
const A15 = document.getElementById('A15')

const B1 = document.getElementById('B1')
const B2 = document.getElementById('B2')
const B3 = document.getElementById('B3')
const B4 = document.getElementById('B4')
const B5 = document.getElementById('B5')
const B6 = document.getElementById('B6')
const B7 = document.getElementById('B7')
const B8 = document.getElementById('B8')
const B9 = document.getElementById('B9')
const B10 = document.getElementById('B10')
const B11 = document.getElementById('B11')
const B12 = document.getElementById('B12')
const B13 = document.getElementById('B13')
const B14 = document.getElementById('B14')
const B15 = document.getElementById('B15')

const C1 = document.getElementById('C1')
const C2 = document.getElementById('C2')
const C3 = document.getElementById('C3')
const C4 = document.getElementById('C4')
const C5 = document.getElementById('C5')
const C6 = document.getElementById('C6')
const C7 = document.getElementById('C7')
const C8 = document.getElementById('C8')
const C9 = document.getElementById('C9')
const C10 = document.getElementById('C10')
const C11 = document.getElementById('C11')
const C12 = document.getElementById('C12')
const C13 = document.getElementById('C13')
const C14 = document.getElementById('C14')
const C15 = document.getElementById('C15')

const D1 = document.getElementById('D1')
const D2 = document.getElementById('D2')
const D3 = document.getElementById('D3')
const D4 = document.getElementById('D4')
const D5 = document.getElementById('D5')
const D6 = document.getElementById('D6')
const D7 = document.getElementById('D7')
const D8 = document.getElementById('D8')
const D9 = document.getElementById('D9')
const D10 = document.getElementById('D10')
const D11 = document.getElementById('D11')
const D12 = document.getElementById('D12')
const D13 = document.getElementById('D13')
const D14 = document.getElementById('D14')
const D15 = document.getElementById('D15')

const E1 = document.getElementById('E1')
const E2 = document.getElementById('E2')
const E3 = document.getElementById('E3')
const E4 = document.getElementById('E4')
const E5 = document.getElementById('E5')
const E6 = document.getElementById('E6')
const E7 = document.getElementById('E7')
const E8 = document.getElementById('E8')
const E9 = document.getElementById('E9')
const E10 = document.getElementById('E10')
const E11 = document.getElementById('E11')
const E12 = document.getElementById('E12')
const E13 = document.getElementById('E13')
const E14 = document.getElementById('E14')
const E15 = document.getElementById('E15')

const F1 = document.getElementById('F1')
const F2 = document.getElementById('F2')
const F3 = document.getElementById('F3')
const F4 = document.getElementById('F4')
const F5 = document.getElementById('F5')
const F6 = document.getElementById('F6')
const F7 = document.getElementById('F7')
const F8 = document.getElementById('F8')
const F9 = document.getElementById('F9')
const F10 = document.getElementById('F10')
const F11 = document.getElementById('F11')
const F12 = document.getElementById('F12')
const F13 = document.getElementById('F13')
const F14 = document.getElementById('F14')
const F15 = document.getElementById('F15')

const G1 = document.getElementById('G1')
const G2 = document.getElementById('G2')
const G3 = document.getElementById('G3')
const G4 = document.getElementById('G4')
const G5 = document.getElementById('G5')
const G6 = document.getElementById('G6')
const G7 = document.getElementById('G7')
const G8 = document.getElementById('G8')
const G9 = document.getElementById('G9')
const G10 = document.getElementById('G10')
const G11 = document.getElementById('G11')
const G12 = document.getElementById('G12')
const G13 = document.getElementById('G13')
const G14 = document.getElementById('G14')
const G15 = document.getElementById('G15')

const H1 = document.getElementById('H1')
const H2 = document.getElementById('H2')
const H3 = document.getElementById('H3')
const H4 = document.getElementById('H4')
const H5 = document.getElementById('H5')
const H6 = document.getElementById('H6')
const H7 = document.getElementById('H7')
const H8 = document.getElementById('H8')
const H9 = document.getElementById('H9')
const H10 = document.getElementById('H10')
const H11 = document.getElementById('H11')
const H12 = document.getElementById('H12')
const H13 = document.getElementById('H13')
const H14 = document.getElementById('H14')
const H15 = document.getElementById('H15')

const I1 = document.getElementById('I1')
const I2 = document.getElementById('I2')
const I3 = document.getElementById('I3')
const I4 = document.getElementById('I4')
const I5 = document.getElementById('I5')
const I6 = document.getElementById('I6')
const I7 = document.getElementById('I7')
const I8 = document.getElementById('I8')
const I9 = document.getElementById('I9')
const I10 = document.getElementById('I10')
const I11 = document.getElementById('I11')
const I12 = document.getElementById('I12')
const I13 = document.getElementById('I13')
const I14 = document.getElementById('I14')
const I15 = document.getElementById('I15')

const J1 = document.getElementById('J1')
const J2 = document.getElementById('J2')
const J3 = document.getElementById('J3')
const J4 = document.getElementById('J4')
const J5 = document.getElementById('J5')
const J6 = document.getElementById('J6')
const J7 = document.getElementById('J7')
const J8 = document.getElementById('J8')
const J9 = document.getElementById('J9')
const J10 = document.getElementById('J10')
const J11 = document.getElementById('J11')
const J12 = document.getElementById('J12')
const J13 = document.getElementById('J13')
const J14 = document.getElementById('J14')
const J15 = document.getElementById('J15')

const K1 = document.getElementById('K1')
const K2 = document.getElementById('K2')
const K3 = document.getElementById('K3')
const K4 = document.getElementById('K4')
const K5 = document.getElementById('K5')
const K6 = document.getElementById('K6')
const K7 = document.getElementById('K7')
const K8 = document.getElementById('K8')
const K9 = document.getElementById('K9')
const K10 = document.getElementById('K10')
const K11 = document.getElementById('K11')
const K12 = document.getElementById('K12')
const K13 = document.getElementById('K13')
const K14 = document.getElementById('K14')
const K15 = document.getElementById('K15')

const L1 = document.getElementById('L1')
const L2 = document.getElementById('L2')
const L3 = document.getElementById('L3')
const L4 = document.getElementById('L4')
const L5 = document.getElementById('L5')
const L6 = document.getElementById('L6')
const L7 = document.getElementById('L7')
const L8 = document.getElementById('L8')
const L9 = document.getElementById('L9')
const L10 = document.getElementById('L10')
const L11 = document.getElementById('L11')
const L12 = document.getElementById('L12')
const L13 = document.getElementById('L13')
const L14 = document.getElementById('L14')
const L15 = document.getElementById('L15')

const M1 = document.getElementById('M1')
const M2 = document.getElementById('M2')
const M3 = document.getElementById('M3')
const M4 = document.getElementById('M4')
const M5 = document.getElementById('M5')
const M6 = document.getElementById('M6')
const M7 = document.getElementById('M7')
const M8 = document.getElementById('M8')
const M9 = document.getElementById('M9')
const M10 = document.getElementById('M10')
const M11 = document.getElementById('M11')
const M12 = document.getElementById('M12')
const M13 = document.getElementById('M13')
const M14 = document.getElementById('M14')
const M15 = document.getElementById('M15')

const N1 = document.getElementById('N1')
const N2 = document.getElementById('N2')
const N3 = document.getElementById('N3')
const N4 = document.getElementById('N4')
const N5 = document.getElementById('N5')
const N6 = document.getElementById('N6')
const N7 = document.getElementById('N7')
const N8 = document.getElementById('N8')
const N9 = document.getElementById('N9')
const N10 = document.getElementById('N10')
const N11 = document.getElementById('N11')
const N12 = document.getElementById('N12')
const N13 = document.getElementById('N13')
const N14 = document.getElementById('N14')
const N15 = document.getElementById('N15')

const O1 = document.getElementById('O1')
const O2 = document.getElementById('O2')
const O3 = document.getElementById('O3')
const O4 = document.getElementById('O4')
const O5 = document.getElementById('O5')
const O6 = document.getElementById('O6')
const O7 = document.getElementById('O7')
const O8 = document.getElementById('O8')
const O9 = document.getElementById('O9')
const O10 = document.getElementById('O10')
const O11 = document.getElementById('O11')
const O12 = document.getElementById('O12')
const O13 = document.getElementById('O13')
const O14 = document.getElementById('O14')
const O15 = document.getElementById('O15')

const game = [
    A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,
    B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,
    C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,
    D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13,D14,D15,
    E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,
    F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,
    G1,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12,G13,G14,G15,
    H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,
    I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12,I13,I14,I15,
    J1,J2,J3,J4,J5,J6,J7,J8,J9,J10,J11,J12,J13,J14,J15,
    K1,K2,K3,K4,K5,K6,K7,K8,K9,K10,K11,K12,K13,K14,K15,
    L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,
    M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M13,M14,M15,
    N1,N2,N3,N4,N5,N6,N7,N8,N9,N10,N11,N12,N13,N14,N15,
    O1,O2,O3,O4,O5,O6,O7,O8,O9,O10,O11,O12,O13,O14,O15,]

const exit = []

// GAME 1
const gamePlayer1 = [
    [B5,C5],
    [E12,E13],
    [H8,I8],
    [I1,I2,I3],
    [B12,B13,B14],
    [O2,O3,O4,O5],
    [I12,J12,K12,L12,M12]
]
const gameIa1 = [
    [A3,B3],
    [M1,M2],
    [M15,N15],
    [H10,I10,J10],
    [A8,A9,A10],
    [G6,H6,I6,J6],
    [E2,E3,E4,E5,E6]
]
// GAME 2
const gamePlayer2 = [
    [N7,N8],
    [C5,C6],
    [K12,K13],
    [G10,G11,G12],
    [B15,C15,D15],
    [H8,I8,J8,K8],
    [I2,J2,K2,L2,M2]
]
const gameIa2 = [
    [I11,I12],
    [A2,B2],
    [C10,D10],
    [G2,G3,G4],
    [F6,G6,H6],
    [O2,O3,O4,O5],
    [O11,O12,O13,O14,O15]
]
// GAME 3
const gamePlayer3 = [
    [N15,O15],
    [G2,G3],
    [A3,B3],
    [I1,I2,I3],
    [I10,J10,K10],
    [N1,N2,N3,N4],
    [O9,O10,O11,O12,O13]
]
const gameIa3 = [
    [A15,B15],
    [J4,K4],
    [G7,G8],
    [H14,I14,J14],
    [N10,N11,N12],
    [D2,D3,D4,D5],
    [B8,B9,B10,B11,B12]
]
// GAME 4
const gamePlayer4 = [
    [J9,K9],
    [G12,G13],
    [C3,D3],
    [F1,G1,H1],
    [B10,B11,B12],
    [C8,D8,E8,F8],
    [L1,L2,L3,L4,L5]
]
const gameIa4 = [
    [M2,M3],
    [F12,F13],
    [M12,M13],
    [B7,C7,D7],
    [O7,O8,O9],
    [J6,K6,L6,M6],
    [B1,B2,B3,B4,B5]
]
// GAME 5
const gamePlayer5 = [
    [C4,D4],
    [A8,B8],
    [C12,D12],
    [E6,F6,G6],
    [E10,F10,G10],
    [D8,E8,F8,G8],
    [F3,G3,H3,I3,J3]
]
const gameIa5 = [
    [L4,M4],
    [N8,O8],
    [L12,M12],
    [I6,J6,K6],
    [I10,J10,K10],
    [I8,J8,K8,L8],
    [F13,G13,H13,I13,J13]
]

