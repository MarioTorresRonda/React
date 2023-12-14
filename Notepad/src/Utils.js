export function getSelectedProject( projects ) {
    var selectedItem = null;
    if ( projects ) {
      projects.forEach( ( item ) => {
        if ( item.active ) {
          selectedItem = item;
          return;
        }
      } );
    }
    return selectedItem; 
}