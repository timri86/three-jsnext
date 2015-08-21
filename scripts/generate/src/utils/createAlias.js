export default function createAlias ( keypath ) {
	return keypath === 'THREE.REVISION' ? // TODO handle this better...
		'"jsnext"' :
		keypath
			.replace( 'THREE.', '' )
			.replace( /^[^a-zA-Z$_]/, '_$1' );
}
