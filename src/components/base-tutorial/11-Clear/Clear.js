import React from "react"
import Bernie from "../../../assets/bernie.jpg"

/**
 * Use clear-left to position an element below any preceding left-floated elements.
 * Use clear-right to position an element below any preceding right-floated elements.
 * Use clear-both to position an element below any preceding floated elements.
 */

export default function Clear() {
  return (
    <div>
      <div className="bg-blue-200 p-10">
        <img className="float-left w-48" src={Bernie} />
        <img className="float-right w-64" src={Bernie} />
        <p className="clear-left text-lg">
          The repeal of the Missouri Compromise, and the propriety of its
          restoration, constitute the subject of what I am about to say. As I
          desire to present my own connected view of this subject, my remarks
          will not be, specifically, an answer to Judge Douglas; yet, as I
          proceed, the main points he has presented will arise, and will receive
          such respectful attention as I may be able to give them. I wish
          further to say, that I do not propose to question the patriotism, or
          to assail the motives of any man, or class of men; but rather to
          strictly confine myself to the naked merits of the question. I also
          wish to be no less than National in all the positions I may take; and
          whenever I take ground which others have thought, or may think,
          narrow, sectional and dangerous to the Union, I hope to give a reason,
          which will appear sufficient, at least to some, why I think
          differently. And, as this subject is no other, than part and parcel of
          the larger general question of domestic-slavery, I wish to MAKE and to
          KEEP the distinction between the EXISTING institution, and the
          EXTENSION of it, so broad, and so clear, that no honest man can
          misunderstand me, and no dishonest one, successfully misrepresent me.
        </p>
      </div>

      <div className="bg-blue-300 p-10 my-10">
        <img className="float-left w-64" src={Bernie} />
        <img className="float-right w-48" src={Bernie} />
        <p className="clear-right text-lg">
          The repeal of the Missouri Compromise, and the propriety of its
          restoration, constitute the subject of what I am about to say. As I
          desire to present my own connected view of this subject, my remarks
          will not be, specifically, an answer to Judge Douglas; yet, as I
          proceed, the main points he has presented will arise, and will receive
          such respectful attention as I may be able to give them. I wish
          further to say, that I do not propose to question the patriotism, or
          to assail the motives of any man, or class of men; but rather to
          strictly confine myself to the naked merits of the question. I also
          wish to be no less than National in all the positions I may take; and
          whenever I take ground which others have thought, or may think,
          narrow, sectional and dangerous to the Union, I hope to give a reason,
          which will appear sufficient, at least to some, why I think
          differently. And, as this subject is no other, than part and parcel of
          the larger general question of domestic-slavery, I wish to MAKE and to
          KEEP the distinction between the EXISTING institution, and the
          EXTENSION of it, so broad, and so clear, that no honest man can
          misunderstand me, and no dishonest one, successfully misrepresent me.
        </p>
      </div>

      <div className="bg-blue-400 p-10 my-10">
        <img className="float-left w-64" src={Bernie} />
        <img className="float-right w-48" src={Bernie} />
        <p className="clear-both text-lg">
          The repeal of the Missouri Compromise, and the propriety of its
          restoration, constitute the subject of what I am about to say. As I
          desire to present my own connected view of this subject, my remarks
          will not be, specifically, an answer to Judge Douglas; yet, as I
          proceed, the main points he has presented will arise, and will receive
          such respectful attention as I may be able to give them. I wish
          further to say, that I do not propose to question the patriotism, or
          to assail the motives of any man, or class of men; but rather to
          strictly confine myself to the naked merits of the question. I also
          wish to be no less than National in all the positions I may take; and
          whenever I take ground which others have thought, or may think,
          narrow, sectional and dangerous to the Union, I hope to give a reason,
          which will appear sufficient, at least to some, why I think
          differently. And, as this subject is no other, than part and parcel of
          the larger general question of domestic-slavery, I wish to MAKE and to
          KEEP the distinction between the EXISTING institution, and the
          EXTENSION of it, so broad, and so clear, that no honest man can
          misunderstand me, and no dishonest one, successfully misrepresent me.
        </p>
      </div>
    </div>
  )
}
