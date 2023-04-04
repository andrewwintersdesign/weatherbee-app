import { ReactComponent as ClearSkiesLarge } from "./icons/clearSkies/clear-skies-96.svg";
import { ReactComponent as ClearSkiesSmall } from "./icons/clearSkies/clear-skies-48.svg";
import { ReactComponent as MostlyClearLarge } from "./icons/mostlyClear/mostly-clear-96.svg";
import { ReactComponent as MostlyClearSmall } from "./icons/mostlyClear/mostly-clear-48.svg";
import { ReactComponent as PartlyCloudyLarge } from "./icons/partlyCloudy/partly-cloudy-96.svg";
import { ReactComponent as PartlyCloudySmall } from "./icons/partlyCloudy/partly-cloudy-48.svg";
import { ReactComponent as OvercastLarge } from "./icons/overcast/overcast-96.svg";
import { ReactComponent as OvercastSmall } from "./icons/overcast/overcast-48.svg";
import { ReactComponent as LightDrizzleLarge } from "./icons/lightDrizzle/light-drizzle-96.svg";
import { ReactComponent as LightDrizzleSmall } from "./icons/lightDrizzle/light-drizzle-48.svg";
import { ReactComponent as ModerateDrizzleLarge } from "./icons/moderateDrizzle/moderate-drizzle-96.svg";
import { ReactComponent as ModerateDrizzleSmall } from "./icons/moderateDrizzle/moderate-drizzle-48.svg";
import { ReactComponent as HeavyDrizzleLarge } from "./icons/heavyDrizzle/heavy-drizzle-96.svg";
import { ReactComponent as HeavyDrizzleSmall } from "./icons/heavyDrizzle/heavy-drizzle-48.svg";
import { ReactComponent as FogLarge } from "./icons/fog/fog-96.svg";
import { ReactComponent as FogSmall } from "./icons/fog/fog-48.svg";
import { ReactComponent as LightFreezingDrizzleLarge } from "./icons/lightFreezingDrizzle/light-freezing-drizzle-96.svg";
import { ReactComponent as LightFreezingDrizzleSmall } from "./icons/lightFreezingDrizzle/light-freezing-drizzle-48.svg";
import { ReactComponent as HeavyFreezingDrizzleLarge } from "./icons/heavyFreezingDrizzle/heavy-freezing-drizzle-96.svg";
import { ReactComponent as HeavyFreezingDrizzleSmall } from "./icons/heavyFreezingDrizzle/heavy-freezing-drizzle-48.svg";
import { ReactComponent as LightRainLarge } from "./icons/lightRain/light-rain-96.svg";
import { ReactComponent as LightRainSmall } from "./icons/lightRain/light-rain-48.svg";
import { ReactComponent as ModerateRainLarge } from "./icons/moderateRain/moderate-rain-96.svg";
import { ReactComponent as ModerateRainSmall } from "./icons/moderateRain/moderate-rain-48.svg";
import { ReactComponent as HeavyRainLarge } from "./icons/heavyRain/heavy-rain-96.svg";
import { ReactComponent as HeavyRainSmall } from "./icons/heavyRain/heavy-rain-48.svg";
import { ReactComponent as LightFreezingRainLarge } from "./icons/lightFreezingRain/light-freezing-rain-96.svg";
import { ReactComponent as LightFreezingRainSmall } from "./icons/lightFreezingRain/light-freezing-rain-48.svg";
import { ReactComponent as HeavyFreezingRainLarge } from "./icons/heavyFreezingRain/heavy-freezing-rain-96.svg";
import { ReactComponent as HeavyFreezingRainSmall } from "./icons/heavyFreezingRain/heavy-freezing-rain-48.svg";
import { ReactComponent as LightSnowLarge } from "./icons/lightSnow/light-snow-96.svg";
import { ReactComponent as LightSnowSmall } from "./icons/lightSnow/light-snow-48.svg";
import { ReactComponent as ModerateSnowLarge } from "./icons/moderateSnow/moderate-snow-96.svg";
import { ReactComponent as ModerateSnowSmall } from "./icons/moderateSnow/moderate-snow-48.svg";
import { ReactComponent as HeavySnowLarge } from "./icons/heavySnow/heavy-snow-96.svg";
import { ReactComponent as HeavySnowSmall } from "./icons/heavySnow/heavy-snow-48.svg";
import { ReactComponent as ThunderstormsLarge } from "./icons/thunderstorms/thunderstorms-96.svg";
import { ReactComponent as ThunderstormsSmall } from "./icons/thunderstorms/thunderstorms-48.svg";
import { ReactComponent as ThunderstormLightHailLarge } from "./icons/thunderstormLightHail/thunderstorm-light-hail-96.svg";
import { ReactComponent as ThunderstormLightHailSmall } from "./icons/thunderstormLightHail/thunderstorm-light-hail-48.svg";
import { ReactComponent as ThunderstormHeavyHailLarge } from "./icons/thunderstormHeavyHail/thunderstorm-heavy-hail-96.svg";
import { ReactComponent as ThunderstormHeavyHailSmall } from "./icons/thunderstormHeavyHail/thunderstorm-heavy-hail-48.svg";

import { FunctionComponent } from "react";
import { Icon, IconTypes } from "../../model";
import { Box } from "@mui/material";

type Props = {
  iconName: Icon;
  size: "large" | "small";
};



const iconTypes: {large: IconTypes, small: IconTypes} = {
  large: {
    clearSkies: ClearSkiesLarge,
    mostlyClear: MostlyClearLarge,
    partlyCloudy: PartlyCloudyLarge,
    overcast: OvercastLarge,
    lightDrizzle: LightDrizzleLarge,
    moderateDrizzle: ModerateDrizzleLarge,
    heavyDrizzle: HeavyDrizzleLarge,
    fog: FogLarge,
    lightFreezingDrizle: LightFreezingDrizzleLarge,
    heavyFreezingDrizzle: HeavyFreezingDrizzleLarge,
    lightRain: LightRainLarge,
    moderateRain: ModerateRainLarge,
    heavyRain: HeavyRainLarge,
    lightFreezingRain: LightFreezingRainLarge,
    heavyFreezingRain: HeavyFreezingRainLarge,
    lightSnow: LightSnowLarge,
    moderateSnow: ModerateSnowLarge,
    heavySnow: HeavySnowLarge,
    thunderstorms: ThunderstormsLarge,
    thunderstormLightHail: ThunderstormLightHailLarge,
    thunderstormHeavyHail: ThunderstormHeavyHailLarge,
    '': () => <div/>,
  },
  small: {
    clearSkies: ClearSkiesSmall,
    mostlyClear: MostlyClearSmall,
    partlyCloudy: PartlyCloudySmall,
    overcast: OvercastSmall,
    lightDrizzle: LightDrizzleSmall,
    moderateDrizzle: ModerateDrizzleSmall,
    heavyDrizzle: HeavyDrizzleSmall,
    fog: FogSmall,
    lightFreezingDrizle: LightFreezingDrizzleSmall,
    heavyFreezingDrizzle: HeavyFreezingDrizzleSmall,
    lightRain: LightRainSmall,
    moderateRain: ModerateRainSmall,
    heavyRain: HeavyRainSmall,
    lightFreezingRain: LightFreezingRainSmall,
    heavyFreezingRain: HeavyFreezingRainSmall,
    lightSnow: LightSnowSmall,
    moderateSnow: ModerateSnowSmall,
    heavySnow: HeavySnowSmall,
    thunderstorms: ThunderstormsSmall,
    thunderstormLightHail: ThunderstormLightHailSmall,
    thunderstormHeavyHail: ThunderstormHeavyHailSmall,
    '': () => <div/>
  }
  
  
  
};

const WeatherIcon = (props: Props) => {
  const Icon: FunctionComponent = iconTypes[props.size][props.iconName];
  const size = props.size === 'large' ? 96 : 48
  return <Box sx={{width: size, height:size}}><Icon /></Box>;
};

export default WeatherIcon;
