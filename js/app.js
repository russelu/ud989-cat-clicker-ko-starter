var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T']);

	this.level = ko.computed(function() {
		if (this.clickCount()<10) {
			return 'Infant';
		} else if (this.clickCount()<20) {
			return 'Teenager';
		} else {
			return 'Adult';
		}
	}, this);

}

var ViewModel = function() {

	var self = this;

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};
}

ko.applyBindings(new ViewModel());