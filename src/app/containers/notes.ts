import { Component } from '@angular/core';
import { NoteCard }  from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
    NoteCard
  ],
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }

  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        note creator here center
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
           <note-card
            [note]="note"
            (checked)="onNoteChecked($event, i)"
            *ngFor="let note of notes; let i = index"
           ></note-card>
        </div>
      </div>
    </div>


  `
})
export class Notes {
  notes = [
    {title:'new note 1', value: 'This is the 1st note', color: 'teal'},
    {title:'new note 2', value: 'This is the 2nd note', color: 'pink'},
    {title:'new note 3', value: 'This is the 3rd note', color: 'yellow'},
  ]

  onNoteChecked(note, i){
    this.notes.splice(i, 1)
  }
};
