
enum controllerList{
    //% block="有"
    con1 = 1,
    //% block="无"
    con2 = 0
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace Solenoid {

    //% weight=99
    //% blockId="magnet_controller" block="连接引脚 %pin| 电磁铁 %con| 磁性"
    export function magnetController(pin: DigitalPin, con:controllerList): void {

        pins.digitalWritePin(pin, con);
        
    }
    
}


