/*
 * SpurtCommerce
 * version 3.0.1
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidesetting-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalizeLayoutComponent implements OnInit {
  isClassVisible: boolean;

  constructor(public titleService: Title) {
    this.isClassVisible = false;
  }

  ngOnInit() {
    this.titleService.setTitle('Settings');
  }
}
