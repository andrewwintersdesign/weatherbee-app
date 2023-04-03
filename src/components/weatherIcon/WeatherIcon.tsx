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
import { FunctionComponent } from "react";
import { Icon, IconTypes } from "../../model";

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
    '': () => <div/>
  }
  
  
  
};

const WeatherIcon = (props: Props) => {
  const Icon: FunctionComponent = iconTypes[props.size][props.iconName];
  return <Icon />;
};

export default WeatherIcon;
