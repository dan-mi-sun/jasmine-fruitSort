describe("Fruits", function() {

  var list;
  var apple;
  var pear;
  var mango;

  describe("calculatePositions", function() {
    beforeEach(function() {
      list = document.createElement("ol");

      apple = document.createElement("li");
      apple.setAttribute("id", 75);
      list.appendChild(apple);

      pear = document.createElement("li");
      pear.setAttribute("id", 78);
      list.appendChild(pear);

      mango = document.createElement("li");
      mango.setAttribute("id", 92);
      list.appendChild(mango);

      calculatePositions(list);
    });

    it("should set a data attribute position on each fruit", function() {
      expect(apple.getAttribute("data-position")).toBe('0');
      expect(pear.getAttribute("data-position")).toBe('1');
      expect(mango.getAttribute("data-position")).toBe('2');
    });

  });

  describe("updatePositions", function() {
    it("should send the right parameters to rails via AJAX", function() {
      spyOn($, "ajax");

      var data = [{ id: 75, position: 0}, { id: 80, position: 1}];

      updatePositions(data);

      var lastRequest = $.ajax.mostRecentCall.args[0];
      var url = "http://localhost:3000/fruits/update_positions";
      expect(lastRequest.url).toEqual(url);
      expect(lastRequest.type).toEqual("POST");
      expect(lastRequest.data).toEqual(data);
    });
  });

});