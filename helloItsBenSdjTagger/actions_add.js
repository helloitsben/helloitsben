/****************************************** 
* Add Serato DJ Tags for Ben's Library  
* V 2.0.1
*******************************************
*
*
* Current tags in coding system:
* HHE - Hip Hop
* JHH - Jazzy Hip Hop
* UHH - Indie/ Underground Hip Hop
* RE  - Rock
* PE  - Pop
* RGE - Reggae
* CE  - Hot garbage/ club stuff
* OSE - Old School
* YA  - Bay Area Slaps
* KPE - KPOP
* DE  - Dance
* ND  - Nu-Disco
* LE  - Latin Essentials
* DH  - Dance Hall
* DE  - Dance
* AB  - Afro Beats
* OSE - Old School
*
******************************************/

let addTag = async function (tagToAppend) {
        let list = await uitools.getSelectedTracklist().whenLoaded();

        if (list.count === 0) {
            // if empty, kick out
            return;
        }

        list.forEach(function (selectedSong) {
            selectedSong.beginUpdate();

            selectedSong.getCommentAsync().then(
                function (value) {
                if (!value.toUpperCase().includes(tagToAppend)) {
                    let comments = value
                        comments += ' ';
                    comments += tagToAppend;
                    selectedSong.setCommentAsync(comments.trim());
                }
            },
                function (error) {
                //kick out
                return;
            });

            selectedSong.endUpdate();
        });

        list.commitAsync();
}

// start defining the menu options
actions.addTagHhe = {
    title: _('Add HHE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(HHE)');}
};

actions.addTagJhh = {
    title: _('Add JHH'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(JHH)');}
};

actions.addTagUhh = {
    title: _('Add UHH'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(UHH)');}
};


actions.addTagRe = {
    title: _('Add RE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(RE)');}
};

actions.addTagPe = {
    title: _('Add PE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(PE)');}
};

actions.addTagRge = {
    title: _('Add RGE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(RGE)');}
};

actions.addTagCe = {
    title: _('Add CE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(CE)');}
};

actions.addTagOSE = {
    title: _('Add OSE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function(){addTag('(OSE)');}
};

actions.addTagYa = {
    title: _('Add YA'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(YAY AREA) (BAY AREA) SLAPS');}
};

actions.addTagKpe = {
    title: _('Add KPE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(KPE) (KPOP)');}
};

actions.addTagDE = {
    title: _('Add DE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(DE)');}
};

actions.addTagND = {
    title: _('Add ND'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(ND) (NuDisco)');}
};

actions.addTagLE = {
    title: _('Add LE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(LE) (Latin)');}
};

actions.addTagDH = {
    title: _('Add DH'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(DH) (DanceHall)');}
};

actions.addTagAB = {
    title: _('Add AB'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(Ab) (AfroBeats)');}
};

actions.addTagDE = {
    title: _('Add DE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(DE)');}
};

actions.addTagOSE = {
    title: _('Add OSE'),
    hotkeyAble: true,
    disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {addTag('(OSE)');}
};

// define serato menu item:
let serato = {
    action: {
		title:_('Serato'),
		disabled: uitools.notMediaListSelected,
		visible: true,
		submenu: [
		{
			action: actions.addTagHhe,
			order: 1,
			grouporder: 10
		}, 
		{
			action: actions.addTagJhh,
			order: 2,
			grouporder: 10
		}, 
		{
			action: actions.addTagUhh,
			order: 3,
			grouporder: 10
		}, 
		{
			action: actions.addTagRe,
			order: 4,
			grouporder: 10
		}, 
		{
			action: actions.addTagPe,
			order: 5,
			grouporder: 10
		}, {
			action: actions.addTagRge,
			order: 6,
			grouporder: 10
		}, 
		{
			action: actions.addTagCe,
			order: 7,
			grouporder: 10
		}, 
		{
			action: actions.addTagOSE,
			order: 8,
			grouporder: 10
		}, 
		{
			action: actions.addTagYa,
			order: 9,
			grouporder: 10
		}, 
		{
			action: actions.addTagKpe,
			order: 10,
			grouporder: 10
		}, 
		{
			action: actions.addTagDE,
			order: 11,
			grouporder: 10
		}, 
		{
			action: actions.addTagND,
			order: 12,
			grouporder: 10
		}, 
		{
			action: actions.addTagLE,
			order: 13,
			grouporder: 10
		}, 
		{
			action: actions.addTagDH,
			order: 14,
			grouporder: 10
		}, 
		{
			action: actions.addTagAB,
			order: 15,
			grouporder: 10
		}, 
		{
			action: actions.addTagDE,
			order: 16,
			grouporder: 10
		}, 
		{
			action: actions.addTagOSE,
			order: 17,
			grouporder: 10
		}]
	}
};

// add to the media monkey selected track sub menu
window._menuItems.editTags.action.submenu.push({
	action: serato.action,
    order: 1,
    grouporder: 10
});

