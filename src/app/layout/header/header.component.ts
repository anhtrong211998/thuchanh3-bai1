import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  menus: any;
  ngOnInit(): void {
    this.menus = [
      {name:'Home',childs:[{name :'Home1'},{name :'Home2'},{name :'Home3'}]},
      {name:'Shop',childs:[{name :'Shop1'},{name :'Shop2'},{name :'Shop3'}]},
      {name:'BLog',childs:[{name :'BLog1'},{name :'BLog2'},{name :'BLog3'}]},
      {name:'Pages',childs:[{name :'Pages1'},{name :'Pages2'},{name :'Pages3'}]},
      {name:'Contact',childs:[]},

    ];
  }

}
