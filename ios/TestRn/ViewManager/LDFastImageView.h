//
//  LDFastImageView.h
//  TestRn
//
//  Created by 岳立兴 on 2024/2/27.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface LDFastImageView : UIView

@property (nonatomic, copy) NSString *viewManagerTag;
@property (nonatomic, copy) NSString *uri;
@property (nonatomic, copy) RCTDirectEventBlock onCallback;

@end

NS_ASSUME_NONNULL_END
