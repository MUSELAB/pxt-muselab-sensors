/**
 * Blocks to simulate MIDI instruments.
 */
//% weight=99 color="#F59E20" icon="\uf0c3"
namespace MuseSensor {

	/**
     * Get pinname
     */
    //% blockId=get_pin_name
    //% shim=MuseSensor::getPin
    export function getPin(connName: ConnName): number{
      return 0;
    }

    /**
     * Get analog pinname
     */
    //% blockId=get_analog_pin_name
    //% shim=MuseSensor::getanalogPin
    export function getanalogPin(connName: AnalogConnName): number{
      return 0;
    }

    /**
     * Get Pin Property
     */
    //% blockId=get_pin_property
    //% shim=MuseSensor::getPinProperty
    export function getPinProperty(connName: ConnName): number{
      return 0;
    }

    /**
     * Get DHT11 temperature (celsius or fahrenheit).
     */
    //% blockId=MuseSensor_dht_get_temperature block="dht11 %connName| tempreature %FanStatus" 
    //% shim=MuseSensor::DHTGetTemperature
	//% weight=85	
    export function DHTGetTemperature(connName: ConnName, style: DHTTemStyle): number{
      return 0;
    }

    /**
     * Get DHT11 Humidity.
     */
    //% blockId=MuseSensor_dht_get_humidity block="dht11 %connName| humidity"
    //% shim=MuseSensor::DHTGetHumidity
	//% weight=80
    export function DHTGetHumidity(connName: ConnName): number{
      return 0;
    }

    /**
     * Do something when DHT11 temperature change.
     */
    //% blockId=MuseSensor_on_dhttemperature_change block="dht11 %connName| on temperature change"
    //% shim=MuseSensor::onDHTEvent
	//% weight=90
    export function onDHTEvent(connName: ConnName, body: () => void): void{
    	return;
    }


}