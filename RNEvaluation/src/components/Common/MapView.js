/**
 * Map view component
 * Author : Murugappan V
 * Date   : 10 Nov 2018
 * @flow
 */
import React, { PureComponent } from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Images, DefaultValues, ScaleSampDesgWidth } from "../../asset";

type Props = {
	region: any,
	markers: Array<Object>,
};

type State = {
	// region: any,
	// markers: Array<Object>,
};

export class MapViewComp extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		// this.state = { region: props.region, markers: props.markers };
	}

	static getDerivedStateFromProps(nextProps: Props, prevState: State) {
		// if (nextProps.markers != prevState.markers) {
		// 	return { markers: nextProps.markers };
		// }
		return null;
	}

	renderMarkers = (markers: Array<Object>) => {
		return markers.map(marker => (
			<Marker key={marker.id} showsUserLocation={true} coordinate={marker.latlng}>
				<Image
					style={styles.markerImg}
					source={
						marker.type == DefaultValues.ATM
							? Images.mapAtmImg
							: marker.type == DefaultValues.USER
							? Images.mapUserImg
							: Images.mapBankImg
					}
					resizeMode={"contain"}
				/>
			</Marker>
		));
	};

	render() {
        const {region, markers} = this.props
		return (
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={this.props.region}
			>
				{this.renderMarkers(this.props.markers)}
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
	markerImg: {
		width: ScaleSampDesgWidth(39),
		height: ScaleSampDesgWidth(39),
	},
});
