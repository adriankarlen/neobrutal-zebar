import { Workspace, Monitor as Monitor$1, Container, TilingDirection, BindingModeConfig, RunCommandResponse } from 'glazewm';

export interface BatteryOutput {
    chargePercent: number;
    cycleCount: number;
    healthPercent: number;
    powerConsumption: number;
    state: 'discharging' | 'charging' | 'full' | 'empty' | 'unknown';
    isCharging: boolean;
    timeTillEmpty: number | null;
    timeTillFull: number | null;
    voltage: number | null;
}

export interface CpuOutput {
    frequency: number;
    usage: number;
    logicalCoreCount: number;
    physicalCoreCount: number;
    vendor: string;
}

export interface DateOutput {
    formatted: string;
    new: Date;
    now: number;
    iso: string;
}

export interface GlazeWmOutput {
    displayedWorkspace: Workspace;
    focusedWorkspace: Workspace;
    currentWorkspaces: Workspace[];
    allWorkspaces: Workspace[];
    allMonitors: Monitor$1[];
    focusedMonitor: Monitor$1;
    currentMonitor: Monitor$1;
    focusedContainer: Container;
    tilingDirection: TilingDirection;
    bindingModes: BindingModeConfig[];
    runCommand(command: string, subjectContainerId?: string): Promise<RunCommandResponse>;
}

export interface MemoryOutput {
    usage: number;
    freeMemory: number;
    usedMemory: number;
    totalMemory: number;
    freeSwap: number;
    usedSwap: number;
    totalSwap: number;
}

export interface NetworkOutput {
    defaultInterface: NetworkInterface | null;
    defaultGateway: NetworkGateway | null;
    interfaces: NetworkInterface[];
    traffic: NetworkTraffic | null;
}
interface NetworkInterface {
    name: string;
    friendlyName: string | null;
    description: string | null;
    type: InterfaceType;
    ipv4Addresses: string[];
    ipv6Addresses: string[];
    macAddress: string | null;
    transmitSeed: number | null;
    receiveSpeed: number | null;
    dnsServers: string[];
    isDefault: boolean;
}
interface NetworkGateway {
    macAddress: string;
    ipv4Addresses: string[];
    ipv6Addresses: string[];
    ssid: string | null;
    signalStrength: number | null;
}
declare enum InterfaceType {
    UNKNOWN = "unknown",
    ETHERNET = "ethernet",
    TOKEN_RING = "token_ring",
    FDDI = "fddi",
    PPP = "ppp",
    LOOPBACK = "loopback",
    SLIP = "slip",
    ATM = "atm",
    GENERIC_MODEM = "generic_modem",
    ISDN = "isdn",
    WIFI = "wifi",
    DSL = "dsl",
    TUNNEL = "tunnel",
    HIGH_PERFORMANCE_SERIAL_BUS = "high_performance_serial_bus",
    MOBILE_BROADBAND = "mobile_broadband",
    BRIDGE = "bridge"
}
interface NetworkTraffic {
    received: number | null;
    transmitted: number | null;
}

declare enum WeatherStatus {
    CLEAR_DAY = "clear_day",
    CLEAR_NIGHT = "clear_night",
    CLOUDY_DAY = "cloudy_day",
    CLOUDY_NIGHT = "cloudy_night",
    LIGHT_RAIN_DAY = "light_rain_day",
    LIGHT_RAIN_NIGHT = "light_rain_night",
    HEAVY_RAIN_DAY = "heavy_rain_day",
    HEAVY_RAIN_NIGHT = "heavy_rain_night",
    SNOW_DAY = "snow_day",
    SNOW_NIGHT = "snow_night",
    THUNDER_DAY = "thunder_day",
    THUNDER_NIGHT = "thunder_night"
}

interface WeatherOutput {
    isDaytime: boolean;
    status: WeatherStatus;
    celsiusTemp: number;
    fahrenheitTemp: number;
    windSpeed: number;
}
