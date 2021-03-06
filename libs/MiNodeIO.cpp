#include "MiNodeIO.h"

MiNodeIO::MiNodeIO( int ID_A0, int ID_A1, int ID_A2,
                    int ID_D12,int ID_D13,int ID_D14,
                    int ID_D15) :
A0(ID_A0, MICROBIT_PIN_P0, MICROBIT_PIN_P1),
A1(ID_A1, MICROBIT_PIN_P1, MICROBIT_PIN_P2),
A2(ID_A2, MICROBIT_PIN_P2, MICROBIT_PIN_P3),
D0(MINODE_ID_NC, NC, NC),
D1(MINODE_ID_NC, NC, NC),
D2(MINODE_ID_NC, NC, NC),
D3(MINODE_ID_NC, NC, NC),
D4(MINODE_ID_NC, NC, NC),
D5(MINODE_ID_NC, NC, NC),
D6(MINODE_ID_NC, NC, NC),
D7(MINODE_ID_NC, NC, NC),
D8(MINODE_ID_NC, NC, NC),
D9(MINODE_ID_NC, NC, NC),
D10(MINODE_ID_NC, NC, NC),
D11(MINODE_ID_NC, NC, NC),
D12(ID_D12, MICROBIT_PIN_P12, MICROBIT_PIN_P13),
D13(ID_D13, MICROBIT_PIN_P13, MICROBIT_PIN_P14),
D14(ID_D14, MICROBIT_PIN_P14, MICROBIT_PIN_P15),
D15(ID_D15, MICROBIT_PIN_P15, MICROBIT_PIN_P16)
{

}